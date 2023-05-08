import React, { useEffect, useState } from 'react';
import { Modal, KeyboardAvoidingView } from 'react-native';
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

type Props = {
	title: string;
	type: 'deposit' | 'withdraw';
	modalVisible: boolean;
	onPressConfirm: () => void;
	closeModal: () => void;
};

const InputModal = ({
	title,
	type,
	modalVisible,
	onPressConfirm,
	closeModal,
}: Props) => {
	const { userData } = useAppSelector(state => state.user);
	const [value, setValue] = useState<string>();

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
							onPress={() => setValue('100,000')}
						/>
						<Caption1 style={{ marginTop: 8 }}>($28.5)</Caption1>
					</SelectBtnWrapper>
					<SelectBtnWrapper>
						<SelectButton
							text="+10,000 sats"
							onPress={() => setValue('10,000')}
						/>
						<Caption1 style={{ marginTop: 8 }}>($2.85)</Caption1>
					</SelectBtnWrapper>
				</SelectBtnsWrapper>
			);
		} else {
			return (
				<Footnote style={{ textAlign: 'center', marginBottom: 16 }}>
					Withdrawable balance:{' '}
					<Footnote weight="bold" style={{ textDecorationLine: 'underline' }}>
						{userData?.btcBalance.toLocaleString()}
					</Footnote>{' '}
					sats
				</Footnote>
			);
		}
	};

	return (
		<Modal animationType="slide" transparent={true} visible={modalVisible}>
			<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
				<Wrapper onPress={closeModal} activeOpacity={1}>
					<Container>
						<RowWrapper>
							<Icon source={Lightening} />
							<Title3 weight="bold">{title}</Title3>
						</RowWrapper>
						<InputWrapper>
							<Input
								value={
									value
										? Number(value.replace(/,/g, '')).toLocaleString()
										: value
								}
								onChangeText={setValue}
								keyboardType="numeric"
								autoFocus
							/>
							<Subheadline>sats</Subheadline>
						</InputWrapper>
						{renderInputBelow()}
						<MainButton
							text="Confirm"
							onPress={onPressConfirm}
							buttonStyle={{ borderRadius: 8 }}
						/>
					</Container>
				</Wrapper>
			</KeyboardAvoidingView>
		</Modal>
	);
};

export default InputModal;

const Wrapper = styled.TouchableOpacity`
	flex: 1;
	justify-content: flex-end;
	background-color: rgba(0, 0, 0, 0.75);
`;

const Container = styled.View`
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
	height: 100%;
	text-align: right;
	margin-right: 12px;
	font-size: 34px;
	font-family: 'Pretendard-Regular';
`;

const SelectBtnsWrapper = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 16px;
	margin-horizontal: 48px;
`;

const SelectBtnWrapper = styled.View`
	align-items: center;
`;
