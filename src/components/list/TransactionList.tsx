import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

// components
import { Headline, Subheadline } from 'components/common';

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
	const renderItemHandler = ({ item }: { item: any }) => {
		return (
			<ItemWrapper>
				<Subheadline color="#8E8E93">
					{moment(item.date).format('MMMM Do YYYY, h:mm:ss a')}
				</Subheadline>
				<RowWrapper>
					<Headline>{item.trType}</Headline>
					<Subheadline>{`${item.amount} sats (${item.fee} sats fee)`}</Subheadline>
				</RowWrapper>
			</ItemWrapper>
		);
	};

	return <StyledFlatList data={data} renderItem={renderItemHandler} />;
};

export default TransactionList;

const StyledFlatList = styled.FlatList`
	margin-top: 16px;
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
