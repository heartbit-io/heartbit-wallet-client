import React, { useEffect } from 'react';
import styled from 'styled-components/native';

// components
import { Footnote } from 'components/common';
import TransactionListItem from './TransactionListItem';

// hooks
import { useAppDispatch, useAppSelector } from 'hooks/hooks';

// store
import { getTransactionsList } from 'store/slices/transactionsSlice';

const TransactionList = () => {
	const dispatch = useAppDispatch();
	const { transactions, transactionsLoading, hasMore, refreshing } =
		useAppSelector(state => state.transactions);

	useEffect(() => {
		dispatch(getTransactionsList(true));
	}, []);

	const renderItemHandler: any = ({ item }: { item: TransactionProps }) => {
		return <TransactionListItem transaction={item} />;
	};

	const renderListEmptyComponent = () => (
		<Footnote style={{ textAlign: 'center', marginTop: 50 }}>
			There is no any transactions
		</Footnote>
	);

	return (
		<StyledFlatList
			data={transactions}
			renderItem={renderItemHandler}
			ListEmptyComponent={renderListEmptyComponent()}
			refreshing={refreshing}
			onRefresh={() => dispatch(getTransactionsList(true))}
			onEndReached={() => hasMore && dispatch(getTransactionsList())}
		/>
	);
};

export default TransactionList;

const StyledFlatList = styled.FlatList``;
