import React, { useEffect, useState } from 'react';
import { Alert, BackHandler } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useActivityIndicator } from 'hooks/useActivityIndicator';

// components
import { ArrowButton, Header } from 'components';
import {
	Body,
	Caption1,
	Footnote,
	Space,
	Subheadline,
} from 'components/common';
import { AnswerLoading } from 'components/loading';

// apis
import { deleteQuestion, getReply, postGPTReply } from 'apis/questionApi';
import { fetchLatestBtcRate } from 'store/slices/coinSlice';
import { removeQuestion } from 'store/slices/questionsSlice';

// assets
import Question from 'assets/img/question.svg';
import Answer from 'assets/img/answer.svg';
import AILogo from 'assets/img/aiLogo.svg';
import Caution from 'assets/img/alert-circle.svg';

type Props = NativeStackScreenProps<RootStackType, 'Forum'>;

const questionContent = [
	{ type: 'content', title: 'What are your symptoms?' },
	{
		type: 'currentMedication',
		title: 'What medication do you currently take?',
	},
	{
		type: 'pastIllnessHistory',
		title: 'Past or pre-existing medical history of you or your family',
	},
	{ type: 'ageSexEthnicity', title: 'Age and Sex' },
	{
		type: 'lifestyle',
		title:
			'Do you have any allergies or dietary habits? and how often do you exercise?',
	},
	{
		type: 'others',
		title: 'Do you have any specific question about your health issue?',
	},
];

function Forum({ navigation, route }: Props) {
	const { question, isFromBountyScreen } = route.params;
	const { toggleActivityIndicator } = useActivityIndicator();
	const dispatch = useAppDispatch();
	const { USDPerSat } = useAppSelector(state => state.coin);
	const [loading, setLoading] = useState(false);
	const [answer, setAnswer] = useState<ReplyResponse | any>({
		replyType: '',
		name: '',
		classification: '',
		reply: '',
		createdAt: '',
	});

	useEffect(() => {
		setLoading(true);
		dispatch(fetchLatestBtcRate());
		if (isFromBountyScreen) {
			setAnswer({
				replyType: 'ai',
				name: 'Advice by GPT-3.5',
				classification: 'Open AI',
				reply: 'I’m preparing my answer. (Could take up to 10 ~ 20 secs)',
				createdAt: '',
			});
			postGPTReply(question.id)
				.then(res => setAnswer({ ...res.data } as ReplyResponse))
				.catch(err => Alert.alert(err as string, 'Try again later'))
				.finally(() => setLoading(false));
		} else {
			getReply(question.id)
				.then(res => setAnswer({ ...res.data } as ReplyResponse))
				.catch(err => Alert.alert(err as string, 'Try again later'))
				.finally(() => setLoading(false));
		}

		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			() => {
				onPressHeaderLeft();
				return true;
			},
		);

		return () => backHandler.remove();
	}, []);

	const getDateFormatted = (createdAt?: string) => {
		return createdAt === undefined || createdAt === ''
			? moment().format('MMM D YYYY')
			: moment(createdAt).format('MMM D YYYY');
	};

	const onPressHeaderLeft = () =>
		isFromBountyScreen
			? navigation.navigate('DrawerTabs')
			: navigation.goBack();

	const onPressHeaderRight = () => {
		Alert.alert(
			`Are you sure you want to delete this?`,
			'Your question and all the advice from AI and doctors will be gone.',
			[
				{
					text: 'Delete',
					onPress: () => {
						toggleActivityIndicator(true);
						deleteQuestion(question.id)
							.then(res => {
								if (res.statusCode === 200) {
									Alert.alert(res.message);
									dispatch(removeQuestion(question.id));
									isFromBountyScreen
										? navigation.navigate('DrawerTabs')
										: navigation.goBack();
								}
							})
							.catch(res => Alert.alert(res.message, 'Try again later'))
							.finally(() => toggleActivityIndicator(false));
					},
				},
				{
					text: 'Cancel',
					onPress: () => {},
				},
			],
		);
	};

	let reply = '';

	if (answer.replyType === 'ai') {
		reply = answer?.reply;
	} else {
		reply = answer?.doctorNote || '';
	}

	return (
		<ScrollWrapper>
			<Header
				headerTitle={answer?.title}
				headerLeft={true}
				headerRight={true}
				headerRightTitle={'Delete'}
				onPressHeaderLeft={onPressHeaderLeft}
				onPressHeaderRight={onPressHeaderRight}
			/>
			<PostWrapper>
				<ProfileWrapper>
					<Icon source={Question} />
					<PostInfoWrapper>
						<Body weight="bold">You</Body>
						<Caption1 color="rgba(60, 60, 67, 0.6)">
							{getDateFormatted(question.createdAt)} ・{' '}
							{question.bountyAmount.toLocaleString()} sats{' '}
							{`($${(question.bountyAmount * USDPerSat).toLocaleString(
								undefined,
								{ maximumFractionDigits: 2 },
							)})`}
						</Caption1>
					</PostInfoWrapper>
				</ProfileWrapper>
				{questionContent.map(
					el =>
						!!question[el.type as keyof typeof question] && (
							<Container key={el.type}>
								{!(question.type === 'general' && el.type === 'content') && (
									<Footnote
										weight="bold"
										color="#8E8E93"
										style={{ marginBottom: 8 }}
									>
										{el.title}
									</Footnote>
								)}
								<Body color="#3A3A3C">
									{question[el.type as keyof typeof question]}
								</Body>
							</Container>
						),
				)}
			</PostWrapper>
			<PostWrapper>
				{loading ? (
					<AnswerLoading />
				) : (
					<>
						<ProfileWrapper>
							<Icon source={answer.replyType === 'ai' ? AILogo : Answer} />
							<PostInfoWrapper>
								<Body weight="bold">{answer.name}</Body>
								<Caption1 color="rgba(60, 60, 67, 0.6)">
									{answer.classification} ・{' '}
									{getDateFormatted(answer.createdAt)}
								</Caption1>
							</PostInfoWrapper>
						</ProfileWrapper>
						<Body color="#3A3A3C" style={{ marginBottom: 26 }}>
							{reply}
						</Body>
						{/* {answer.replyType !== 'ai' && question.type === 'illness' && (
							<ArrowButton
								text="See in health record format"
								btnStyle={{ marginBottom: 24 }}
								onPress={() =>
									navigation.navigate('HealthRecord', { replies: answer })
								}
							/>
						)} */}
					</>
				)}
			</PostWrapper>
			<CautionWrapper>
				<Icon source={Caution} />
				<Space height={8} />
				<Subheadline color={'#8E8E93'}>
					Answers provided by AI and human doctors are for reference purposes
					only, not a substitute for professional medical advice, diagnosis, or
					treatment. The answers should not be considered the final medical
					opinion or legally binding for the providers involved. {'\n\n'} If you
					think you may have a medical emergency, call doctors or emergency
					services immediately. Reliance on any information AI or online doctors
					provides is solely at your own risk.
				</Subheadline>
			</CautionWrapper>
		</ScrollWrapper>
	);
}

export default Forum;

const ScrollWrapper = styled.ScrollView`
	flex: 1;
	background-color: #fff;
	border-top-width: 0.5px;
	border-top-color: rgba(60, 60, 67, 0.36);
`;

const PostWrapper = styled.View`
	border-bottom-width: 0.5px;
	border-bottom-color: rgba(60, 60, 67, 0.36);
	margin-top: 15.5px;
	padding-horizontal: 26px;
`;

const ProfileWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 15.5px;
`;

const Icon = styled.Image``;

const PostInfoWrapper = styled.View`
	margin-left: 12px;
`;

const Container = styled.View`
	margin-bottom: 26px;
`;

const CautionWrapper = styled.View`
	padding-top: 24px;
	padding-bottom: 50px;
	padding-horizontal: 26px;
`;
