import React from 'react';
import { Linking, Modal } from 'react-native';
import styled from 'styled-components/native';

// assets
import Lightening from 'assets/img/lightening.svg';

// components
import { QRCodeHeartBit, Subheadline, Title3 } from 'components';

type Props = {
	title: string;
	type: 'deposit' | 'withdraw';
	modalVisible: boolean;
	closeModal: () => void;
	qrAddress: string;
};

const QRModal = ({
	title,
	type,
	modalVisible,
	closeModal,
	qrAddress,
}: Props) => {
	const linkingHandler = () =>
		Linking.openURL(
			`https://community.heartbit.io/c/blog/how-to-deposit-and-withdraw-bitcoin-with-lightning-network`,
		);

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={modalVisible}
			onRequestClose={closeModal}
		>
			<Wrapper onPress={closeModal} activeOpacity={1}>
				<Container activeOpacity={1}>
					<RowWrapper>
						<Icon source={Lightening} />
						<Title3 weight="bold">{title}</Title3>
					</RowWrapper>
					<Subheadline>
						Scan the QR code or input the invoice address below with a{' '}
						<Subheadline
							onPress={linkingHandler}
							style={{ color: '#FF2D55', textDecorationLine: 'underline' }}
						>
							Lightning Wallet
						</Subheadline>{' '}
						from which you want to {type} your requested amount.
					</Subheadline>
					<QRCodeHeartBit qrAddress={qrAddress} />
				</Container>
			</Wrapper>
		</Modal>
	);
};

export default QRModal;

const Wrapper = styled.TouchableOpacity`
	flex: 1;
	justify-content: flex-end;
	background-color: rgba(0, 0, 0, 0.75);
`;

const Container = styled.TouchableOpacity`
	align-items: center;
	background-color: #fff5ed;
	padding-top: 19px;
	padding-bottom: 37px;
	padding-horizontal: 43px;
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
