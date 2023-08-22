import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { BarIndicator } from 'react-native-indicators';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// components
import { Subheadline } from 'components/common';
import QuestionListItem from './QuestionListItem';
import { MainButton } from 'components/buttons';

// hooks
import { useAppDispatch, useAppSelector } from 'hooks';

// store
import { fetchQuestionsList } from 'store/slices/questionsSlice';

const MyQuestionList = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();
	const dispatch = useAppDispatch();
	const { questions, fetchingMore, hasMore, refreshing } = useAppSelector(
		state => state.questions,
	);

	useEffect(() => {
		dispatch(fetchQuestionsList(true));
	}, []);

	const renderItemHandler: any = ({ item }: { item: QuestionResponse }) => {
		return <QuestionListItem question={item} />;
	};

	const renderEmptyComponent = () => (
		<EmptyWrapper>
			<Subheadline color="#3A3A3C">
				You haven’t asked any questions yet.
			</Subheadline>
			<MainButton
				text={'Ask doctors anything'}
				onPress={() => navigation.navigate('IllnessAsk')}
				buttonStyle={{ marginTop: 20, height: 50 }}
			/>
		</EmptyWrapper>
	);

	const renderFooterComponent = () =>
		fetchingMore ? (
			<Footer>
				<BarIndicator count={5} color="#F68F2A" size={25} />
			</Footer>
		) : (
			<Footer />
		);

	return (
		<StyledFlatList
			data={questions}
			renderItem={renderItemHandler}
			refreshing={refreshing}
			onRefresh={() => dispatch(fetchQuestionsList(true))}
			onEndReached={() => hasMore && dispatch(fetchQuestionsList(false, true))}
			ListEmptyComponent={renderEmptyComponent()}
			ListFooterComponent={renderFooterComponent()}
		/>
	);
};

export default MyQuestionList;

const StyledFlatList = styled.FlatList``;

const Footer = styled.View`
	height: 100px;
`;

const EmptyWrapper = styled.View`
	align-items: center;
	justify-content: center;
	padding-top: ${Dimensions.get('screen').height / 3}px;
	padding-horizontal: 32px;
`;
