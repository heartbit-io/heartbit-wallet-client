import React, { useEffect, useState } from 'react';
import { Modal, KeyboardAvoidingView, View } from 'react-native';
import styled from 'styled-components/native';

// assets
import Lightening from 'assets/img/lightening.svg';

// components
import {
	Caption1,
	Footnote,
	MainButton,
	SelectButton,
	Subheadline,
	Title3,
} from 'components';

// hooks
import { useAppSelector } from 'hooks';

// utils
import { OS } from 'utils/utility';

type Props = {
	title: string;
	type: 'deposit' | 'withdraw';
	modalVisible: boolean;
	USDPerSat?: number;
	onPressConfirm: (email: string, amount: number) => void;
	closeModal: () => void;
};

const InputModal = ({
	title,
	type,
	modalVisible,
	USDPerSat,
	onPressConfirm,
	closeModal,
}: Props) => {
	const { userData } = useAppSelector(state => state.user);
	const [value, setValue] = useState<number>(0);

	useEffect(() => {
		if (type === 'withdraw') {
			setValue(userData?.btcBalance.toString());
		}
	}, []);

	const renderInputBelow = () => {
		if (type === 'deposit') {
			return (
				<SelectBtnsWrapper>
					<SelectBtnWrapper>
						<SelectButton
							text="+100,000 sats"
							onPress={() => setValue(value + 100000)}
						/>
						<Caption1 style={{ marginTop: 8 }}>
							${' '}
							{(100000 * (USDPerSat as number))?.toLocaleString(undefined, {
								maximumFractionDigits: 2,
							})}
						</Caption1>
					</SelectBtnWrapper>
					<SelectBtnWrapper>
						<SelectButton
							text="+10,000 sats"
							onPress={() => setValue(value + 10000)}
						/>
						<Caption1 style={{ marginTop: 8 }}>
							${' '}
							{(10000 * (USDPerSat as number))?.toLocaleString(undefined, {
								maximumFractionDigits: 2,
							})}
						</Caption1>
					</SelectBtnWrapper>
				</SelectBtnsWrapper>
			);
		} else {
			return (
				<Footnote style={{ textAlign: 'center', marginBottom: 16 }}>
					Withdrawable balance:{' '}
					<Footnote
						style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}
					>
						{userData?.withdrawableBtcBalance === undefined
							? 0
							: userData?.withdrawableBtcBalance?.toLocaleString()}
					</Footnote>{' '}
					sats
				</Footnote>
			);
		}
	};

	const CustomComp = OS === 'ios' ? KeyboardAvoidingView : View;

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={modalVisible}
			onRequestClose={closeModal}
		>
			<CustomComp behavior="padding" style={{ flex: 1 }}>
				<Wrapper onPress={closeModal} activeOpacity={1}>
					<Container activeOpacity={1}>
						<RowWrapper>
							<Icon source={Lightening} />
							<Title3 weight="bold">{title}</Title3>
						</RowWrapper>
						<InputWrapper>
							<Input
								value={value?.toLocaleString()}
								onChangeText={value =>
									setValue(Number(value.replace(/,/g, '')))
								}
								keyboardType="numeric"
								autoFocus
							/>
							<Subheadline>sats</Subheadline>
						</InputWrapper>
						{renderInputBelow()}
						<MainButton
							text="Confirm"
							onPress={() => onPressConfirm(userData.email, value)}
							buttonStyle={{ borderRadius: 8 }}
						/>
					</Container>
				</Wrapper>
			</CustomComp>
		</Modal>
	);
};

export default InputModal;

const Wrapper = styled.TouchableOpacity`
	flex: 1;
	justify-content: flex-end;
	background-color: rgba(0, 0, 0, 0.75);
`;

const Container = styled.TouchableOpacity`
	background-color: #fff5ed;
	padding-top: 19px;
	padding-bottom: 16px;
	padding-horizontal: 16px;
`;

const RowWrapper = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 32px;
`;

const Icon = styled.Image`
	margin-right: 7px;
`;

const InputWrapper = styled.TouchableOpacity`
	height: 48px;
	flex-direction: row;
	align-items: center;
	border-bottom-width: 2px;
	border-bottom-color: #ff2d55;
	margin-bottom: 16px;
	padding-horizontal: 12px;
	margin-horizontal: 32px;
`;

const Input = styled.TextInput`
	flex: 1;
	height: 68px;
	text-align: right;
	margin-right: 12px;
	font-size: 34px;
	font-family: 'Pretendard-Regular';
`;

const SelectBtnsWrapper = styled.View`
	flex-direction: row;
	justify-content: space-around;
	margin-bottom: 16px;
	margin-horizontal: 32px;
`;

const SelectBtnWrapper = styled.View`
	align-items: center;
	width: 100%;
`;
