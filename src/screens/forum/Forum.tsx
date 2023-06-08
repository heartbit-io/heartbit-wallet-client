import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { Body, Caption1, Footnote, Subheadline } from 'components/common';
import loading_dot from 'assets/gif/loading_dot.gif';
import Header from 'components/common/Header';
import { Alert } from 'react-native';
import { deleteQuestion, getReply, postGPTReply } from 'apis/questionApi';
import moment from 'moment';
import Question from 'assets/img/question.svg';
import Answer from 'assets/img/answer.svg';
import AILogo from 'assets/img/aiLogo.svg';

type Props = NativeStackScreenProps<RootStackType, 'Forum'>;

function Forum({ navigation, route }: Props) {
	const [loading, setLoading] = useState(false);
	const [answer, setAnswer] = useState<ReplyResponse>({
		replyType: 'ai',
		name: 'Advice by GPT-3.5',
		classification: 'Open AI',
		reply: 'I’m preparing my answer. (Could take up to 10 ~ 20 secs)',
		createdAt: '',
	});

	useEffect(() => {
		setLoading(true);
		if (false) {
			postGPTReply(route.params.questionId)
				.then(res => setAnswer({ ...res.data } as ReplyResponse))
				.catch(err => Alert.alert(err as string, 'Try again later'))
				.finally(() => setLoading(false));
		} else {
			getReply(route.params.questionId)
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

	const onPressHeaderLeft = () => navigation.navigate('DrawerTabs');

	const onPressHeaderRight = async () => {
		Alert.alert(
			`Are you sure you want to permanently delete this? Your question, doctor's note, and medical record will be deleted.`,
			'',
			[
				{
					text: 'Delete',
					onPress: async () => {
						const responseDto: ResponseDto<any> = await deleteQuestion(
							route.params.questionId,
						);
						if (responseDto.statusCode === 200) {
							Alert.alert(responseDto.message);
							navigation.navigate('DrawerTabs');
						} else {
							Alert.alert(responseDto.message, 'Try again later');
						}
					},
				},
				{
					text: 'Cancel',
					onPress: async () => '',
				},
			],
		);
	};

	return (
		<Wrapper>
			<ScrollWrapper>
				<Header
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
								{getDateFormatted(route.params.createdAt)} ・{' '}
								{route.params.bountyAmount.toLocaleString()} sats
							</Caption1>
						</PostInfoWrapper>
					</ProfileWrapper>
					<Container>
						<Footnote weight="bold" color="#8E8E93">
							History of your present illness
						</Footnote>
						<Body color="#3A3A3C" style={{ marginTop: 8 }}>
							I’ve been experiencing fatigue for the past 6 months. Despite
							sleeping 8-10 hours each night, I wake up feeling tired and her
							energy only worsens as the day goes on. She reports that her daily
							activities have become significantly impaired because of her
							exhaustion. She denies experiencing any pain, fever, palpitations,
							shortness of breath, or sleep disturbances.
						</Body>
					</Container>
					<Container>
						<Footnote weight="bold" color="#8E8E93">
							Current medications
						</Footnote>
						<Body color="#3A3A3C" style={{ marginTop: 8 }}>
							I am taking levothyroxine daily for hypothyroidism.
						</Body>
					</Container>
					<Container>
						<Footnote weight="bold" color="#8E8E93">
							Age, Sex, and Ethnicity
						</Footnote>
						<Body color="#3A3A3C" style={{ marginTop: 8 }}>
							24, male, Korean american
						</Body>
					</Container>
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
					{answer.createdAt === '' ? (
						<GPTLoadingWrapper>
							<Text>
								I’m preparing my answer. (Could take up to 10 ~ 20 secs)
							</Text>
							<LoadingGif source={loading_dot} />
						</GPTLoadingWrapper>
					) : (
						<Text>
							{answer.reply + '\n\nPlease wait for an answer by human doctor.'}
						</Text>
					)}
				</PostWrapper>
				<CautionWrapper>
					<CautionLogo source={require('assets/img/ic_alert_circle.png')} />
					<TextCaution>
						Answers provided by AI and human doctors are for reference purposes
						only, not a substitute for professional medical advice, diagnosis,
						or treatment. The answers should not be considered the final medical
						opinion or legally binding for the providers involved. {'\n\n'} If
						you think you may have a medical emergency, call doctors or
						emergency services immediately. Reliance on any information AI or
						online doctors provides is solely at your own risk.
					</TextCaution>
				</CautionWrapper>
			</ScrollWrapper>
		</Wrapper>
	);
}

export default Forum;

const Container = styled.View`
	margin-bottom: 26px;
`;

const Wrapper = styled.View`
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

const Icon = styled.Image``;

const PostInfoWrapper = styled.View`
	margin-left: 12px;
`;

const ScrollWrapper = styled.ScrollView`
	flex: 1;
	background-color: white;
`;

const CautionWrapper = styled.View`
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	border-color: #bdbdbd;
	border-top-width: 1px;
	padding-vertical: 25px;
	background-color: white;
	padding-horizontal: 25px;
`;

const Text = styled(Body)`
	text-align: left;
`;

const TextCaution = styled(Subheadline)`
	color: gray;
	margin-bottom: 66px;
`;

const ProfileWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 15.5px;
`;

const GPTLoadingWrapper = styled.View`
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

const LoadingGif = styled.Image`
	width: 100px;
	height: 100px;
	margin-left: -20px;
`;

const CautionLogo = styled.Image`
	width: 24px;
	height: 24px;
	margin-top: 27px;
	margin-bottom: 11px;
`;
