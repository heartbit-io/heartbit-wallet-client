import React, { useCallback } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
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
import { fetchQuestionsList } from 'store/slices/questionsSlice';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Home'>;

function Home({ navigation }: Props) {
	const dispatch = useAppDispatch();
	const { questions, questionsLoading } = useAppSelector(
		state => state.questions,
	);

	useFocusEffect(
		useCallback(() => {
			dispatch(fetchQuestionsList(true));
		}, []),
	);

	return (
		<Gradient>
			<Wrapper>
				<HomeHeader />
				<LogoWrapper>
					<Icon source={logo} />
					<MainButton
						text={'Ask doctors anything'}
						onPress={() => navigation.navigate('Ask')}
						buttonStyle={{ marginTop: 82, height: 50 }}
					/>
				</LogoWrapper>
				{questionsLoading && questions.length === 0 ? (
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
						<View>
							{questions?.map(question => (
								<QuestionListItem key={question.id} question={question} />
							))}
						</View>
					</RecentWrapper>
				)}
			</Wrapper>
		</Gradient>
	);
}

export default Home;

const Wrapper = styled.ScrollView`
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
