import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

// assets
import logo from 'assets/logo/logo.svg';
import empty from 'assets/img/emptyArrowQ.svg';

// components
import {
	ArrowButtonWithText,
	EmptyList,
	Gradient,
	HomeHeader,
	MainButton,
	QuestionListItem,
} from 'components';

// hooks
import { useAppDispatch, useAppSelector } from 'hooks/hooks';

// store
import { getTransactionsList } from 'store/slices/transactionsSlice';
import { fetchQuestionsList } from 'store/slices/questionsSlice';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Home'>;

function Home({ navigation }: Props) {
	const dispatch = useAppDispatch();
	const { questions, questionsLoading } = useAppSelector(
		state => state.questions,
	);

	useEffect(() => {
		dispatch(getTransactionsList());
		dispatch(fetchQuestionsList());
	}, []);

	return (
		<Gradient>
			<HomeHeader />
			<Wrapper>
				<LogoWrapper>
					<Icon source={logo} />
					<MainButton
						text={'Ask doctors anything'}
						onPress={() => navigation.navigate('Ask')}
						buttonStyle={{ marginTop: 85, height: 50 }}
					/>
				</LogoWrapper>
				{questionsLoading ? (
					<ActivityIndicator
						color={'#F68F2A'}
						size={'large'}
						style={{ marginTop: 40 }}
					/>
				) : questions?.length === 0 ? (
					<EmptyList
						icon={empty}
						text={
							'Get your first health consultation\nfrom doctors all over the world'
						}
						wrapperStyle={{ marginTop: 40 }}
					/>
				) : (
					<RecentWrapper>
						<ArrowButtonWithText
							title="Recent"
							btnText="See all"
							onPress={() => navigation.navigate('MyQuestions')}
						/>
						<ScrollView>
							{questions?.map(question => (
								<QuestionListItem key={question.id} question={question} />
							))}
						</ScrollView>
					</RecentWrapper>
				)}
			</Wrapper>
		</Gradient>
	);
}

export default Home;

const Wrapper = styled.View`
	flex: 1;
`;

const LogoWrapper = styled.View`
	align-items: center;
	margin-top: 90px;
	padding-horizontal: 32px;
`;

const Icon = styled.Image`
	resize-mode: contain;
`;

const RecentWrapper = styled.View`
	flex: 1;
	margin-top: 64px;
`;
