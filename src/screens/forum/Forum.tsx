import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';

// components
import { ArrowButton, Header } from 'components';
import {
	Body,
	Caption1,
	Footnote,
	Space,
	Subheadline,
} from 'components/common';

// apis
import { deleteQuestion, getReply, postGPTReply } from 'apis/questionApi';

// assets
import loading_dot from 'assets/gif/loading_dot.gif';
import Question from 'assets/img/question.svg';
import Answer from 'assets/img/answer.svg';
import AILogo from 'assets/img/aiLogo.svg';
import Caution from 'assets/img/alert-circle.svg';

type Props = NativeStackScreenProps<RootStackType, 'Forum'>;

const questionContent = [
	{ type: 'content', title: 'History of your present illness' },
	{ type: 'currentMedication', title: 'Current medications' },
	{
		type: 'pastIllnessHistory',
		title: 'Past illness history of you or your family',
	},
	{ type: 'ageSexEthnicity', title: 'Age, Sex, and Ethnicity' },
	{ type: 'others', title: 'Others' },
];

function Forum({ navigation, route }: Props) {
	const { question, isFromBountyScreen } = route.params;
	const [loading, setLoading] = useState(false);
	const [answer, setAnswer] = useState<ReplyResponse | any>({
		replyType: 'ai',
		name: 'Advice by GPT-3.5',
		classification: 'Open AI',
		reply: 'I’m preparing my answer. (Could take up to 10 ~ 20 secs)',
		createdAt: '',
	});

	useEffect(() => {
		setLoading(true);
		if (isFromBountyScreen) {
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
			`Are you sure you want to permanently delete this? Your question, doctor's note, and medical record will be deleted.`,
			'',
			[
				{
					text: 'Delete',
					onPress: () =>
						deleteQuestion(question.id)
							.then(res => {
								if (res.statusCode === 200) {
									Alert.alert(res.message);
									isFromBountyScreen
										? navigation.navigate('DrawerTabs')
										: navigation.goBack();
								}
							})
							.catch(res => Alert.alert(res.message, 'Try again later')),
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
		reply = answer?.reply + `\n\nPlease wait for an answer by human doctor.`;
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
							{question.bountyAmount.toLocaleString()} sats
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
				<ProfileWrapper>
					<Icon source={answer.replyType === 'ai' ? AILogo : Answer} />
					<PostInfoWrapper>
						<Body weight="bold">{answer.name}</Body>
						<Caption1 color="rgba(60, 60, 67, 0.6)">
							{answer.classification} ・ {getDateFormatted(answer.createdAt)}
						</Caption1>
					</PostInfoWrapper>
				</ProfileWrapper>
				{loading ? (
					<GPTLoadingWrapper>
						<Body color="#3A3A3C">
							I'm preparing my answer. (Could take up to 10 ~ 20 secs)
						</Body>
						<LoadingGif source={loading_dot} />
					</GPTLoadingWrapper>
				) : (
					<>
						<Body color="#3A3A3C" style={{ marginBottom: 26 }}>
							{reply}
						</Body>
						{answer.replyType !== 'ai' && question.type === 'illness' && (
							<ArrowButton
								text="See in health record format"
								btnStyle={{ marginBottom: 24 }}
								onPress={() =>
									navigation.navigate('HealthRecord', { replies: answer })
								}
							/>
						)}
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

const GPTLoadingWrapper = styled.View`
	padding-bottom: 45px;
`;

const LoadingGif = styled.Image`
	position: absolute;
	bottom: 17px;
	width: 100px;
	height: 30px;
	margin-left: -32px;
	z-index: -5;
`;

const CautionWrapper = styled.View`
	padding-top: 24px;
	padding-bottom: 50px;
	padding-horizontal: 26px;
`;
