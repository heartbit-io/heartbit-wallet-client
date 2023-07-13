import React, { useEffect } from 'react';
import styled from 'styled-components/native';

// components
import { Footnote, Space } from 'components/common';
import QuestionListItem from './QuestionListItem';

// hooks
import { useAppDispatch, useAppSelector } from 'hooks';

// store
import { fetchQuestionsList } from 'store/slices/questionsSlice';

const MyQuestionList = () => {
	const dispatch = useAppDispatch();
	const { questions, questionsLoading, hasMore, refreshing } = useAppSelector(
		state => state.questions,
	);

	useEffect(() => {
		dispatch(fetchQuestionsList(true));
	}, []);

	const renderItemHandler: any = ({ item }: { item: QuestionResponse }) => {
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
			refreshing={refreshing}
			onRefresh={() => dispatch(fetchQuestionsList(true))}
			onEndReached={() => hasMore && dispatch(fetchQuestionsList())}
			ListEmptyComponent={renderEmptyComponent()}
			ListFooterComponent={<Space height={100} />}
		/>
	);
};

export default MyQuestionList;

const StyledFlatList = styled.FlatList``;
