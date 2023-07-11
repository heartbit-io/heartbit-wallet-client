import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';

// components
import {
	ArrowButtonWithText,
	Body,
	Button,
	EmptyList,
	HeaderTitle,
	InputModal,
	LargeTitle,
	QRModal,
	Space,
} from 'components';
import TransactionListItem from 'components/list/TransactionListItem';

// hooks
import { useAppDispatch, useAppSelector } from 'hooks/hooks';

// store & apis
import { getBtcRates } from 'apis/coinApi';
import { getDepositRequest, getWithdrawalRequest } from 'apis/lndApi';
import { getTransactionsList } from 'store/slices/transactionsSlice';

// assets
import EmptyArrow from 'assets/img/emptyArrow.svg';
import { View } from 'react-native';

type Props = NativeStackScreenProps<RootStackType, 'Wallet'>;

const Wallet = ({ navigation }: Props) => {
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector(state => state.user);
	const { transactions, transactionsLoading } = useAppSelector(
		state => state.transactions,
	);
	const [USDPerSat, setUSDPerSat] = useState(0);
	const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
	const [depositModalVisible, setDepositModalVisible] = useState(false);
	const [depositQRVisible, setDepositQRVisible] = useState(false);
	const [withdrawQRVisible, setWithdrawQRVisible] = useState(false);
	const [qrAddress, setQrAddress] = useState('');

	useFocusEffect(
		useCallback(() => {
			dispatch(getTransactionsList(true));
			getBtcRates().then(res =>
				setUSDPerSat(res.data?.customSatoshi as number),
			);
		}, []),
	);

	const confirmHandler = async (
		type: 'deposit' | 'withdraw',
		email: string,
		amount: number,
	) => {
		try {
			if (type === 'deposit') {
				const responseDto: ResponseDto<string> = await getDepositRequest(
					email,
					amount,
				);
				if (responseDto.statusCode === 200) {
					setQrAddress(responseDto.data as string);
					setDepositModalVisible(false);
					setDepositQRVisible(true);
				} else {
					Alert.alert(responseDto.message, 'Try again later');
				}
			} else {
				if (amount > userData?.withdrawableBtcBalance) {
					Alert.alert("You don't have enough withdrawable balance.");
				} else {
					const responseDto: ResponseDto<string> = await getWithdrawalRequest(
						email,
						amount,
					);
					if (responseDto.statusCode === 200) {
						setQrAddress(responseDto.data as string);
						setWithdrawModalVisible(false);
						setWithdrawQRVisible(true);
					} else {
						Alert.alert(responseDto.message, 'Try again later');
					}
				}
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Wrapper keyboardShouldPersistTaps="always">
			<HeaderTitle />
			<TextsWrapper>
				<LargeTitle weight="bold">
					{userData?.btcBalance?.toLocaleString()} sats
				</LargeTitle>
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

			{transactionsLoading && transactions.length === 0 ? (
				<ActivityIndicator
					color={'#5856d6'}
					size={'large'}
					style={{ marginTop: 40 }}
				/>
			) : transactions.length === 0 ? (
				<EmptyList
					icon={EmptyArrow}
					text={'Deposit some bitcoin(sats)\nto spend for bounties'}
					wrapperStyle={{ marginTop: 22 }}
				/>
			) : (
				<TransactionsWrapper>
					<ArrowButtonWithText
						title="Transactions"
						btnText="See all"
						onPress={() => navigation.navigate('Transactions')}
					/>
					<View>
						{transactions.map(transaction => (
							<TransactionListItem
								key={transaction.id}
								transaction={transaction}
							/>
						))}
					</View>
				</TransactionsWrapper>
			)}

			<InputModal
				title={'Deposit with Lightning'}
				type={'deposit'}
				modalVisible={depositModalVisible}
				USDPerSat={USDPerSat}
				onPressConfirm={async (email, amount) =>
					await confirmHandler('deposit', email, amount)
				}
				closeModal={() => setDepositModalVisible(false)}
			/>
			<InputModal
				title={'Withdraw with Lightning'}
				type={'withdraw'}
				modalVisible={withdrawModalVisible}
				onPressConfirm={async (email, amount) =>
					await confirmHandler('withdraw', email, amount)
				}
				closeModal={() => setWithdrawModalVisible(false)}
			/>
			<QRModal
				title={'Deposit with Lightning'}
				type="deposit"
				modalVisible={depositQRVisible}
				closeModal={() => setDepositQRVisible(false)}
				qrAddress={qrAddress}
			/>
			<QRModal
				title={'Withdraw with Lightning'}
				type="withdraw"
				modalVisible={withdrawQRVisible}
				closeModal={() => setWithdrawQRVisible(false)}
				qrAddress={qrAddress}
			/>
		</Wrapper>
	);
};

export default Wallet;

const Wrapper = styled.ScrollView`
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

const TransactionsWrapper = styled.View`
	flex: 1;
	margin-top: 64px;
`;
