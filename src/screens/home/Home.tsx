import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import RecentQuestionList from './RecentQuestionList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
// assets
import logo from 'assets/logo/logo.svg';
import empty from 'assets/img/ic_empty_recent_q.png';

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

import moment from 'moment';

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
		return createdAt === undefined || createdAt === ''
			? moment().format('MMM D YYYY')
			: moment(createdAt).format('MMM D YYYY');
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
					{questions[0].status === '' ? (
						<EmptyWrapper>
							<Empty source={empty} />
							<TextSubHeadline>
								Get your first health consultation from doctors all over the
								world
							</TextSubHeadline>
						</EmptyWrapper>
					) : (
						<RecentWrapper>
							<HeaderWrapper>
								<TextTitle>Recent</TextTitle>
								<TextBody>See all {'>'}</TextBody>
							</HeaderWrapper>
							{questions.map(question => {
								return (
									<QuestionWrapper>
										<TextHeadline>
											{question.content.slice(0, 30).concat('...')}
										</TextHeadline>
										<TextSubHeadlineGray>
											{getDateFormatted(question.createdAt)} ・{' '}
											{question.bountyAmount.toLocaleString()} sats
										</TextSubHeadlineGray>
									</QuestionWrapper>
								);
							})}
						</RecentWrapper>
					)}
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

const EmptyWrapper = styled.View`
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Empty = styled.Image``;

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
const TextSubHeadlineGray = styled(Subheadline)`
	color: gray;
`;

const TextSubHeadline = styled(Subheadline)`
	margin-top: 40px;
	margin-horizontal: 70px;
`;
