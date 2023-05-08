import React, { useState } from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// components
import {
	Body,
	Button,
	HeaderTitle,
	InputModal,
	LargeTitle,
	Space,
	TransactionList,
} from 'components';

// hooks
import { useAppSelector } from 'hooks';

type Props = NativeStackScreenProps<BottomTabTypes, 'Wallet'>;

const Wallet = ({ navigation }: Props) => {
	const { userData } = useAppSelector(state => state.user);
	const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
	const [depositModalVisible, setDepositModalVisible] = useState(false);

	return (
		<Wrapper>
			<HeaderTitle />
			<TextsWrapper>
				<LargeTitle weight="bold">
					{userData?.btcBalance?.toLocaleString()} sats
				</LargeTitle>
				<Body style={{ marginTop: 16, color: '#3A3A3C' }}>234.23 USD</Body>
			</TextsWrapper>
			<ButtonsWrapper>
				<Button
					text={'Withdraw'}
					onPress={() => setWithdrawModalVisible(true)}
				/>
				<Space width={24} />
				<Button
					text={'Deposit'}
					onPress={() => setDepositModalVisible(true)}
					btnStyle={{ backgroundColor: '#007AFF' }}
				/>
			</ButtonsWrapper>
			<TransactionList />
			<InputModal
				title={'Deposit with Lightning'}
				type={'deposit'}
				modalVisible={depositModalVisible}
				onPressConfirm={() => {}}
				closeModal={() => setDepositModalVisible(false)}
			/>
			<InputModal
				title={'Withdraw with Lightning'}
				type={'withdraw'}
				modalVisible={withdrawModalVisible}
				onPressConfirm={() => {}}
				closeModal={() => setWithdrawModalVisible(false)}
			/>
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
	margin-horizontal: 32px;
`;
