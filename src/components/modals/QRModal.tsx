import React from 'react';
import { Modal } from 'react-native';
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
};

const QRModal = ({ title, type, modalVisible, closeModal }: Props) => {
	return (
		<Modal animationType="fade" transparent={true} visible={modalVisible}>
			<Wrapper onPress={closeModal} activeOpacity={1}>
				<Container>
					<RowWrapper>
						<Icon source={Lightening} />
						<Title3 weight="bold">{title}</Title3>
					</RowWrapper>
					<Subheadline>
						Scan the QR code or input the invoice address below with a{' '}
						<Subheadline
							style={{ color: '#FF2D55', textDecorationLine: 'underline' }}
						>
							Lightning Wallet
						</Subheadline>{' '}
						from which you want to {type} your requested amount.
					</Subheadline>
					<QRCodeHeartBit qrAddress="lnbc1m1pjr8fhcpp5g4zlq6sqya0cfspd3sa7kmyamuu8z7qp9r2a2ev3ulxsrsm42usqdqu2askcmr9wssx7e3q2dshgmmndp5scqzpgxqyz5vqsp5xeksml74k3k3u968z73276ajswa24p9nq9g4zqpl8emaqgcdmy7q9qyyssqz7jly7j33u5f66dvu0kkd94mh96zwmq26k26t9q56nzk2ecwaqwst89lnktkjn0rkp4swv4z2sjhardpff8easl45cgd2aldscxy9cgqt4dwm" />
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

const Container = styled.View`
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
