import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import RecentQuestionList from './RecentQuestionList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
// assets
import logo from 'assets/logo/logo.svg';

// components
import {
	Body,
	Gradient,
	Headline,
	MainButton,
	Subheadline,
	Title1,
} from 'components';
import { getQuestionList } from 'apis/questionApi';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Home'>;

function Home({ navigation }: Props) {
	const [questions, setQuestions] = useState<GetQuestionResponse[]>([
		{
			id: 0,
			userId: 0,
			content: '',
			bountyAmount: 0,
			status: '',
			updatedAt: '',
			createdAt: '',
		},
	]);
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
				const responseDto: ResponseDto<GetQuestionResponse[]> =
					await getQuestionList(10, 0);
				setQuestions(responseDto.data as GetQuestionResponse[]);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<Gradient>
			<ScrollView>
				<Wrapper>
					<Logo source={logo} />
					<MainButton
						text={'Ask doctors anything'}
						onPress={() => navigation.navigate('Ask')}
						buttonStyle={{ marginTop: 95 }}
					/>
				</Wrapper>
				<WrapperNotCenter>
					<RecentWrapper>
						<HeaderWrapper>
							<TextTitle>Recent</TextTitle>
							<TextBody>See all {'>'}</TextBody>
						</HeaderWrapper>
						{questions[0].status === '' ? (
							<></>
						) : (
							questions.map(question => {
								return (
									<QuestionWrapper>
										<TextHeadline>
											{question.content.slice(0, 30).concat('...')}
										</TextHeadline>
										<TextSubHeadline>
											{getDateFormatted(question.createdAt)} ・{' '}
											{question.bountyAmount.toLocaleString()} sats
										</TextSubHeadline>
									</QuestionWrapper>
								);
							})
						)}
					</RecentWrapper>
				</WrapperNotCenter>
			</ScrollView>
		</Gradient>
	);
}

export default Home;

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	padding-top: 191px;
	padding-horizontal: 25px;
`;
const WrapperNotCenter = styled.View`
	flex: 1;
	padding-top: 64px;
`;

const Logo = styled.Image``;

const RecentWrapper = styled.View`
	flex-direction: column;
	margin-horizontal: 16px;
`;
const HeaderWrapper = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
`;
const QuestionWrapper = styled.View`
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: 82px;
	border-bottom-width: 0.5px;
	border-color: #bdbdbd;
`;
const TextBody = styled(Body)`
	color: gray;
`;
const TextTitle = styled(Title1)`
	font-weight: bold;
	color: gray;
`;
const TextHeadline = styled(Headline)`
	font-weight: bold;
	margin-bottom: 8px;
`;
const TextSubHeadline = styled(Subheadline)`
	color: gray;
`;
