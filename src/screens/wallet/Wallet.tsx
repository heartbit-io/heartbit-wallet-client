import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import {
	ArrowButtonWithText,
	Body,
	Button,
	HeaderTitle,
	LargeTitle,
	Space,
	TransactionList,
} from 'components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<BottomTabTypes, 'Wallet'>;

const Wallet = ({ navigation }: Props) => {
	return (
		<Wrapper>
			<HeaderTitle />
			<TextsWrapper>
				<LargeTitle weight="bold" color={'#1C1C1E'}>
					2,393,042 sats
				</LargeTitle>
				<Body style={{ marginTop: 16, color: '#3A3A3C' }}>234.23 USD</Body>
			</TextsWrapper>
			<ButtonsWrapper>
				<Button text={'Withdraw'} onPress={() => {}} />
				<Space width={24} />
				<Button
					text={'Deposit'}
					onPress={() => {}}
					btnStyle={{ backgroundColor: '#007AFF' }}
				/>
			</ButtonsWrapper>
			<ArrowButtonWithText
				title="Transactions"
				btnText="See all"
				onPress={() => {}}
			/>
			<TransactionList />
		</Wrapper>
	);
};

export default Wallet;

const Wrapper = styled.View`
	flex: 1;
	background-color: #fff5ed;
`;

const TextsWrapper = styled.View`
	margin-top: 117px;
	align-items: center;
	justify-content: center;
`;

const ButtonsWrapper = styled.View`
	flex-direction: row;
	margin-top: 65px;
	margin-bottom: 64px;
	margin-horizontal: 32px;
`;
