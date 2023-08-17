import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { BarIndicator } from 'react-native-indicators';

// components
import { Footnote } from 'components/common';
import QuestionListItem from './QuestionListItem';

// hooks
import { useAppDispatch, useAppSelector } from 'hooks';

// store
import { fetchQuestionsList } from 'store/slices/questionsSlice';

const MyQuestionList = () => {
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
		<Footnote style={{ textAlign: 'center', marginTop: 50 }}>
			There is no any transactions
		</Footnote>
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
