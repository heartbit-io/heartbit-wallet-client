import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { BarIndicator } from 'react-native-indicators';

// components
import { Subheadline } from 'components/common';
import TransactionListItem from './TransactionListItem';

// hooks
import { useAppDispatch, useAppSelector } from 'hooks/hooks';

// store
import { getTransactionsList } from 'store/slices/transactionsSlice';

const TransactionList = () => {
	const dispatch = useAppDispatch();
	const { transactions, fetchingMore, hasMore, refreshing } = useAppSelector(
		state => state.transactions,
	);

	useEffect(() => {
		dispatch(getTransactionsList(true));
	}, []);

	const renderItemHandler: any = ({ item }: { item: TransactionProps }) => {
		return <TransactionListItem transaction={item} />;
	};

	const renderListEmptyComponent = () => (
		<Subheadline
			color="#3A3A3C"
			style={{
				textAlign: 'center',
				marginTop: Dimensions.get('screen').height / 2.5,
			}}
		>
			There is no any transactions
		</Subheadline>
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
			data={transactions}
			renderItem={renderItemHandler}
			refreshing={refreshing}
			onRefresh={() => dispatch(getTransactionsList(true))}
			onEndReached={() => hasMore && dispatch(getTransactionsList(false, true))}
			ListEmptyComponent={renderListEmptyComponent()}
			ListFooterComponent={renderFooterComponent()}
		/>
	);
};

export default TransactionList;

const StyledFlatList = styled.FlatList``;

const Footer = styled.View`
	height: 100px;
`;
