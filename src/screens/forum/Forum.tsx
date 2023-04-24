import { View } from 'react-native';
import React, { useState } from 'react';
import GPT4Answer from './GPT4Answer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { Body, Caption1, Title1 } from 'components/common';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Forum'>;

function Forum({ navigation }: Props) {
	const [question, setQuestion] = useState('I have early cataracts.');
	// if doctor has answered or not
	const [answer, setAnswer] = useState('Dear patient,');
	return (
		<Wrapper>
			<PostWrapper>
				<ProfileWrapper>
					<CircleSky>
						<ProfileText>Q</ProfileText>
					</CircleSky>
					<PostInfoWrapper>
						<TextBold>You</TextBold>
						<TextCaption>23 Mar 2023 ・ 1000 sats</TextCaption>
					</PostInfoWrapper>
				</ProfileWrapper>
				<Text>{question}</Text>
			</PostWrapper>
			<ScrollWrapper>
				{answer === '' ? (
					<PostWrapper>
						<GPT4Answer />
					</PostWrapper>
				) : (
					<PostWrapper>
						<ProfileWrapper>
							<CircleIndigo>
								<ProfileText>A</ProfileText>
							</CircleIndigo>
							<PostInfoWrapper>
								<TextBold>x5c3ad</TextBold>
								<TextCaption>General physician ・ 1 Apr 2023</TextCaption>
							</PostInfoWrapper>
						</ProfileWrapper>
						<Text>{answer}</Text>
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
