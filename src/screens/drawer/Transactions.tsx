import React from 'react';
import styled from 'styled-components/native';

// components
import { Header, TransactionList } from 'components';

const Transactions = () => {
	return (
		<Wrapper>
			<Header headerTitle={'Transactions'} headerLeft={true} />
			<TransactionList />
		</Wrapper>
	);
};

export default Transactions;

const Wrapper = styled.View`
	flex: 1;
	background-color: #fff;
`;
