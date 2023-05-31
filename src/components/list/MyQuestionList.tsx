import React, { useEffect } from 'react';
import styled from 'styled-components/native';

// components
import { Footnote } from 'components/common';
import QuestionListItem from './QuestionListItem';

// hooks
import { useAppDispatch, useAppSelector } from 'hooks';

// store
import { fetchQuestionsList } from 'store/slices/questionsSlice';

const MyQuestionList = () => {
	const dispatch = useAppDispatch();
	const { questions, questionsLoading, refreshing } = useAppSelector(
		state => state.questions,
	);

	useEffect(() => {
		dispatch(fetchQuestionsList(true));
	}, []);

	const renderItemHandler: any = ({ item }: { item: GetQuestionResponse }) => {
		return <QuestionListItem question={item} />;
	};

	const renderEmptyComponent = () => (
		<Footnote style={{ textAlign: 'center', marginTop: 50 }}>
			There is no any transactions
		</Footnote>
	);

	return (
		<StyledFlatList
			data={questions}
			renderItem={renderItemHandler}
			ListEmptyComponent={renderEmptyComponent()}
			refreshing={refreshing}
			onRefresh={() => dispatch(fetchQuestionsList(true))}
			// onEndReached={() => dispatch(fetchQuestionsList())}
		/>
	);
};

export default MyQuestionList;

const StyledFlatList = styled.FlatList``;
