import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// components
import {
	Body,
	Button,
	HeaderTitle,
	InputModal,
	LargeTitle,
	QRModal,
	Space,
	TransactionList,
} from 'components';

// hooks
import { useAppDispatch, useAppSelector } from 'hooks/hooks';

// store
import { getTransactionsList } from 'store/slices/transactionsSlice';
import { getBtcRates } from 'apis/coinApi';

type Props = NativeStackScreenProps<BottomTabTypes, 'Wallet'>;

const Wallet = ({ navigation }: Props) => {
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector(state => state.user);
	const [satsValue, setSatsValue] = useState(0);
	const [USDPerSat, setUSDPerSat] = useState(0);
	const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
	const [depositModalVisible, setDepositModalVisible] = useState(false);
	const [depositQRVisible, setDepositQRVisible] = useState(false);
	const [withdrawQRVisible, setWithdrawQRVisible] = useState(false);

	const confirmHandler = (type: 'deposit' | 'withdraw', val: number) => {
		setSatsValue(val);

		if (type === 'deposit') {
			setDepositModalVisible(false);
			setDepositQRVisible(true);
		} else {
			setWithdrawModalVisible(false);
			setWithdrawQRVisible(true);
		}
	};

	useEffect(() => {
		dispatch(getTransactionsList());
		(async () => {
			try {
				const responseDto: ResponseDto<ExchangeRateResponse> =
					await getBtcRates();
				setUSDPerSat(responseDto.data?.customSatoshi as number);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<Wrapper>
			<HeaderTitle />
			<TextsWrapper>
				<LargeTitleText>
					{userData?.btcBalance?.toLocaleString()} sats
				</LargeTitleText>
				<Body style={{ marginTop: 16, color: '#3A3A3C' }}>
					{(userData?.btcBalance * USDPerSat).toLocaleString(undefined, {
						maximumFractionDigits: 2,
					})}{' '}
					USD
				</Body>
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
				USDPerSat={USDPerSat}
				onPressConfirm={val => confirmHandler('deposit', val)}
				closeModal={() => setDepositModalVisible(false)}
			/>
			<InputModal
				title={'Withdraw with Lightning'}
				type={'withdraw'}
				modalVisible={withdrawModalVisible}
				onPressConfirm={val => confirmHandler('withdraw', val)}
				closeModal={() => setWithdrawModalVisible(false)}
			/>
			<QRModal
				title={'Deposit with Lightning'}
				type="deposit"
				modalVisible={depositQRVisible}
				closeModal={() => setDepositQRVisible(false)}
			/>
			<QRModal
				title={'Withdraw with Lightning'}
				type="withdraw"
				modalVisible={withdrawQRVisible}
				closeModal={() => setWithdrawQRVisible(false)}
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

const LargeTitleText = styled(LargeTitle)`
	font-weight: bold;
`;
