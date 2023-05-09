import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// components
import { Footnote, Headline, Subheadline } from 'components/common';
import { ArrowButtonWithText } from 'components';
import EmptyList from './EmptyList';

// assets
import EmptyArrow from 'assets/img/emptyArrow.svg';

// hooks
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from 'hooks';

type Props = {
	isTransactionsScreen?: boolean;
};

const TransactionList = ({ isTransactionsScreen }: Props) => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();
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
		if (!isTransactionsScreen && transactions.length > 0) {
			return (
				<ArrowButtonWithText
					title="Transactions"
					btnText="See all"
					onPress={() => navigation.navigate('Transactions')}
				/>
			);
		}
		return null;
	};

	const renderEmptyComponent = () => {
		if (isTransactionsScreen) {
			return (
				<Footnote style={{ textAlign: 'center', marginTop: 50 }}>
					There is no any transactions
				</Footnote>
			);
		} else {
			return (
				<EmptyList
					icon={EmptyArrow}
					text={'Deposit some bitcoin(sats)\nto spend for bounties'}
				/>
			);
		}
	};

	return (
		<StyledFlatList
			data={transactions}
			renderItem={renderItemHandler}
			ListHeaderComponent={renderHeaderComponent()}
			ListEmptyComponent={renderEmptyComponent()}
			stickyHeaderIndices={isTransactionsScreen ? [] : [0]}
			marginTop={isTransactionsScreen ? 0 : transactions.length > 0 ? 64 : 22}
		/>
	);
};

export default TransactionList;

const StyledFlatList = styled.FlatList<{ marginTop: number }>`
	margin-top: ${({ marginTop }) => marginTop}px;
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
