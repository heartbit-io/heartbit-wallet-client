import React from 'react';
import moment from 'moment';
import styled from 'styled-components/native';

// components
import { Headline, Subheadline } from 'components/common';

type Props = { transaction: TransactionProps };

enum TransactionType {
	deposit = 'Deposit',
	withdraw = 'Withdraw',
	bounty_pledged = 'Express fee paid',
	bounty_earned = 'Tip earned',
	bounty_refunded = 'Express fee refunded',
	sign_up_bonus = 'Sign-up bonus',
}

const TransactionListItem = ({ transaction }: Props) => {
	return (
		<ItemWrapper>
			<Subheadline color="#8E8E93">
				{moment(transaction.createdAt).format('D MMM YYYY ・ hh:mm')}
			</Subheadline>
			<RowWrapper>
				<HeadlineText>
					{TransactionType[transaction.type as keyof typeof TransactionType]}
				</HeadlineText>
				<Subheadline>
					{transaction.type === 'withdraw' ||
					transaction.type === 'bounty_pledged'
						? '- '
						: '+ '}
					{`${transaction.amount} sats `}
					{transaction.type === 'withdraw' ||
					transaction.type === 'bounty_earned'
						? `(${transaction.fee} sats fee)`
						: ''}
				</Subheadline>
			</RowWrapper>
		</ItemWrapper>
	);
};

export default TransactionListItem;

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
