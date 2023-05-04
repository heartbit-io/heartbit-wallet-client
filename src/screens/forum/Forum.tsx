import React, { useCallback, useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { Body, Caption1, Subheadline, Title1 } from 'components/common';
import loading_dot from 'assets/gif/loading_dot.gif';
import Header from 'components/common/Header';
import { Alert } from 'react-native';
import { getReply, postGPTReply } from 'apis/questionApi';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Forum'>;

function Forum({ navigation, route }: Props) {
	const [answer, setAnswer] = useState<ReplyResponse>({
		replyType: 'ai',
		name: 'Advice by GPT-3.5',
		classification: 'Open AI',
		reply: 'I’m preparing my answer. (Could take up to 10 ~ 20 secs)',
		createdAt: '',
	});

	const getDateFormatted = (createdAt?: string) => {
		const dateList: string[] =
			createdAt === undefined || createdAt === ''
				? new Date().toDateString().split(' ')
				: new Date(createdAt as string).toDateString().split(' ');
		return `${dateList[2]} ${dateList[1]} ${dateList[3]}` as string;
	};

	useEffect(() => {
		(async () => {
			try {
				let responseDto: ResponseDto<ReplyResponse>;

				route.params.createdAt === undefined
					? (responseDto = await postGPTReply(route.params.questionId))
					: (responseDto = await getReply(route.params.questionId));
				console.log(responseDto.data);
				setAnswer({ ...responseDto.data } as ReplyResponse);
			} catch (err) {
				Alert.alert(err as string, 'Try again later');
			}
		})();
	}, []);

	return (
		<Wrapper>
			<Header headerLeft={true} headerRight={true} />
			<PostWrapper>
				<ProfileWrapper>
					<CircleSky>
						<ProfileText>Q</ProfileText>
					</CircleSky>
					<PostInfoWrapper>
						<TextBold>You</TextBold>
						<TextCaption>
							{getDateFormatted(route.params.createdAt)} ・{' '}
							{route.params.bountyAmount} sats
						</TextCaption>
					</PostInfoWrapper>
				</ProfileWrapper>
				<Text>{route.params.askContent}</Text>
			</PostWrapper>
			<ScrollWrapper>
				<PostWrapper>
					<ProfileWrapper>
						{answer.replyType === 'ai' ? (
							<GPTLogo source={require('assets/img/ic_gpt_logo.png')} />
						) : (
							<CircleIndigo>
								<ProfileText>A</ProfileText>
							</CircleIndigo>
						)}
						<PostInfoWrapper>
							<TextBold>{answer.name}</TextBold>
							<TextCaption>
								{answer.classification} ・ {getDateFormatted(answer.createdAt)}
							</TextCaption>
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
						<Text>{answer.reply}</Text>
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

const Wrapper = styled.View`
	flex: 1;
	background-color: #fff5ed;
`;

const PostWrapper = styled.View`
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	border-color: #bdbdbd;
	border-top-width: 1px;
	padding-vertical: 25px;
	padding-horizontal: 25px;
`;

const PostInfoWrapper = styled.View`
	margin-top: 2px;
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

const TextBold = styled(Body)`
	text-align: left;
	font-weight: bold;
	padding-horizontal: 12px;
`;

const TextCaption = styled(Caption1)`
	color: gray;
	padding-horizontal: 12px;
	padding-top: 3px;
`;
const TextCaution = styled(Subheadline)`
	color: gray;
	margin-bottom: 66px;
`;

const ProfileWrapper = styled.View`
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	margin-bottom: 15px;
`;

const ProfileText = styled(Title1)`
	text-align: center;
	color: white;
	font-weight: bold;
`;

const CircleSky = styled.View`
	background-color: #5ac8fa;
	width: 45px;
	height: 45px;
	border-radius: 22.5px;
	text-align: center;
	justify-content: center;
	align-items: center;
`;

const CircleIndigo = styled.View`
	background-color: #5856d6;
	width: 45px;
	height: 45px;
	border-radius: 22.5px;
	text-align: center;
	justify-content: center;
	align-items: center;
`;

const GPTLogo = styled.Image`
	width: 45px;
	height: 45px;
`;

const GPTLoadingWrapper = styled.View`
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

const LoadingGif = styled.Image`
	width: 100px;
	height: 100px;
`;

const CautionLogo = styled.Image`
	width: 24px;
	height: 24px;
	margin-top: 27px;
	margin-bottom: 11px;
`;
