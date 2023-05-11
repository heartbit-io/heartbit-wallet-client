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
import { useAppSelector } from 'hooks/hooks';

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
					{moment(item.createdAt).format('D MMM YYYY ・ hh:mm')}
				</Subheadline>
				<RowWrapper>
					<HeadlineText>{item.type}</HeadlineText>
					<Subheadline>{`${item.amount} sats (${item.fee} sats fee)`}</Subheadline>
				</RowWrapper>
			</ItemWrapper>
		);
	};

	return (
		<StyledFlatList
			data={transactions}
			renderItem={renderItemHandler}
			ListHeaderComponent={
				!isTransactionsScreen && transactions.length > 0 ? (
					<ArrowButtonWithText
						title="Transactions"
						btnText="See all"
						onPress={() => navigation.navigate('Transactions')}
					/>
				) : (
					<></>
				)
			}
			ListEmptyComponent={
				isTransactionsScreen ? (
					<Footnote style={{ textAlign: 'center', marginTop: 50 }}>
						There is no any transactions
					</Footnote>
				) : (
					<EmptyList
						icon={EmptyArrow}
						text={'Deposit some bitcoin(sats)\nto spend for bounties'}
					/>
				)
			}
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

const HeadlineText = styled(Headline)`
	font-weight: bold;
`;
