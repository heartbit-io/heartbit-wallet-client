import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal } from 'react-native';
import styled from 'styled-components/native';

// components
import { MainButton } from 'components/buttons';
import { Caption1, Subheadline, Title3 } from 'components/common';

type Props = {
	visible: boolean;
	USDPerSat: number;
	setBounty: (val: number) => void;
	closeModal: () => void;
};

const BountyModal = ({ visible, USDPerSat, setBounty, closeModal }: Props) => {
	const [val, setVal] = useState(0);

	return (
		<Modal animationType="fade" transparent={true} visible={visible}>
			<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
				<Wrapper onPress={closeModal} activeOpacity={1}>
					<Container activeOpacity={1}>
						<Title3 weight="bold" style={{ textAlign: 'center' }}>
							Set amount for bounty
						</Title3>
						<InputWrapper>
							<Input
								value={val.toLocaleString()}
								onChangeText={bounty =>
									setVal(Number(bounty.replace(/,/g, '')))
								}
								keyboardType="numeric"
								autoFocus
							/>
							<Subheadline>sats</Subheadline>
						</InputWrapper>
						<USDValue>
							{(val * USDPerSat).toLocaleString(undefined, {
								maximumFractionDigits: 2,
							})}{' '}
							USD
						</USDValue>
						<BountyMinimumText>
							Bounty must be at least 1,000 sats
						</BountyMinimumText>
						<MainButton
							text="Confirm"
							onPress={() => setBounty(val)}
							active={visible && val >= 1000}
							buttonStyle={{ borderRadius: 8 }}
						/>
					</Container>
				</Wrapper>
			</KeyboardAvoidingView>
		</Modal>
	);
};

export default BountyModal;

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

const InputWrapper = styled.TouchableOpacity`
	height: 48px;
	flex-direction: row;
	align-items: center;
	border-bottom-width: 2px;
	border-bottom-color: #ff2d55;
	margin-bottom: 12px;
	margin-top: 32px;
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

const USDValue = styled(Subheadline)`
	text-align: right;
	padding-right: 44px;
`;

const BountyMinimumText = styled(Caption1)`
	color: #ff3b30;
	text-align: center;
	margin-vertical: 8px;
`;
