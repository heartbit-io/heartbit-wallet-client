import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { Body, Caption1, Title1 } from 'components/common';
import loading_dot from 'assets/gif/loading_dot.gif';
import Header from 'components/common/Header';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Forum'>;

function Forum({ navigation, route }: Props) {
	const [question, setQuestion] = useState<GetQuestionResponse>({
		id: 0,
		userId: '',
		content: '',
		bountyAmount: 0,
		status: '',
		updatedAt: '',
		createdAt: '',
		replies: [],
	});
	const [answer, setAnswer] = useState<ReplyResponse>({
		replyType: undefined,
		name: '',
		classfication: '',
		reply: '',
		createdAt: '',
	});
	const getDateFormatted = (timestamp?: string) => {
		const dateList: string[] = new Date(timestamp as string)
			.toDateString()
			.split(' ');
		return `${date[2]} ${date[1]} ${date[3]}` as string;
	};
	const date: string[] = new Date().toDateString().split(' ');
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
							{question.id === 0
								? `${getDateFormatted()} ・ ${route.params.bountyAmount} `
								: `${getDateFormatted(question.createdAt)} ・ ${
										question.bountyAmount
								  } `}
							sats
						</TextCaption>
					</PostInfoWrapper>
				</ProfileWrapper>
				<Text>
					{question.id === 0 ? route.params.askContent : question.content}
				</Text>
			</PostWrapper>
			<ScrollWrapper>
				{answer.replyType === undefined || answer.replyType === 'AI' ? (
					<PostWrapper>
						<ProfileWrapper>
							<GPTLogo source={require('../../assets/img/ic_gpt_logo.png')} />
							<PostInfoWrapper>
								<TextBold>Advice by GPT-3.5</TextBold>
								<TextCaption>
									Open AI ・{' '}
									{answer.replyType === undefined
										? `${getDateFormatted()}`
										: `${getDateFormatted(question.createdAt)}`}
								</TextCaption>
							</PostInfoWrapper>
						</ProfileWrapper>
						{answer.replyType === undefined ? (
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
				) : (
					<PostWrapper>
						<ProfileWrapper>
							<CircleIndigo>
								<ProfileText>A</ProfileText>
							</CircleIndigo>
							<PostInfoWrapper>
								<TextBold>{answer.name}</TextBold>
								<TextCaption>
									{answer.classfication} ・ {getDateFormatted(answer.createdAt)}
								</TextCaption>
							</PostInfoWrapper>
						</ProfileWrapper>
						<Text>{answer.reply}</Text>
					</PostWrapper>
				)}
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
`;

const PostInfoWrapper = styled.View`
	margin-top: 2px;
`;

const ScrollWrapper = styled.ScrollView`
	flex: 1;
	background-color: white;
`;

const Text = styled(Body)`
	text-align: left;
	padding-horizontal: 25px;
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
	margin-left: 25px;
`;

const CircleIndigo = styled.View`
	background-color: #5856d6;
	width: 45px;
	height: 45px;
	border-radius: 22.5px;
	text-align: center;
	justify-content: center;
	align-items: center;
	margin-left: 25px;
`;

const GPTLogo = styled.Image`
	width: 45px;
	height: 45px;
	margin-left: 25px;
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
