import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

// components
import { Headline, Subheadline } from 'components/common';
import { ArrowButtonWithText } from 'components';
import EmptyList from './EmptyList';

// assets
import EmptyArrow from 'assets/img/emptyArrow.svg';

// hooks
import { useAppSelector } from 'hooks';

const data = [
	{
		date: new Date(),
		amount: -1980,
		fee: 20,
		trType: 'Withdraw',
	},
	{
		date: new Date(),
		amount: +1862,
		fee: 132,
		trType: 'Bounty earned',
	},
	{
		date: new Date(),
		amount: -2000,
		fee: 138,
		trType: 'Bounty pledged',
	},
];

const TransactionList = () => {
	const { transactions } = useAppSelector(state => state.transactions);

	const renderItemHandler = ({ item }: { item: any }) => {
		return (
			<ItemWrapper>
				<Subheadline color="#8E8E93">
					{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
				</Subheadline>
				<RowWrapper>
					<Headline>{item.type}</Headline>
					<Subheadline>{`${item.amount} sats (${item.fee} sats fee)`}</Subheadline>
				</RowWrapper>
			</ItemWrapper>
		);
	};

	const renderHeaderComponent = () => {
		if (transactions.length > 0) {
			return (
				<ArrowButtonWithText
					title="Transactions"
					btnText="See all"
					onPress={() => {}}
				/>
			);
		}
		return null;
	};

	const renderEmptyComponent = () => {
		return (
			<EmptyList
				icon={EmptyArrow}
				text={'Deposit some bitcoin(sats)\nto spend for bounties'}
			/>
		);
	};

	return (
		<StyledFlatList
			data={transactions}
			renderItem={renderItemHandler}
			ListHeaderComponent={renderHeaderComponent()}
			ListEmptyComponent={renderEmptyComponent()}
			stickyHeaderIndices={[0]}
		/>
	);
};

export default TransactionList;

const StyledFlatList = styled.FlatList<{ data: any[] }>`
	margin-top: ${({ data }) => (data.length > 0 ? 64 : 22)}px;
`;

const ItemWrapper = styled.View`
	border-bottom-width: 0.5px;
	border-bottom-color: rgba(60, 60, 67, 0.36);
	padding-vertical: 15px;
	margin-horizontal: 16px;
`;

const RowWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 8px;
`;
