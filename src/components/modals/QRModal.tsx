import React, { useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

// assets
import Lightening from 'assets/img/lightening.svg';
import QRCode from 'assets/img/QR.svg';
import Copy from 'assets/img/copy.svg';

// components
import { Caption1, Subheadline, Title3 } from 'components';

// hooks
import { useAppSelector } from 'hooks';

type Props = {
	title: string;
	type: 'deposit' | 'withdraw';
	modalVisible: boolean;
	closeModal: () => void;
};

const QRModal = ({ title, type, modalVisible, closeModal }: Props) => {
	const [copied, setCopied] = useState(false);

	const onPressCopy = () => {
		if (!copied) {
			Clipboard.setString('COPIED VALUE');
			setCopied(true);
			setTimeout(() => setCopied(false), 3000);
		}
	};

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
					<QRIcon source={QRCode} />
					<CopyWrapper copied={copied} onPress={onPressCopy}>
						<Icon source={Copy} />
						<Subheadline numberOfLines={1} color={'#FF2D55'}>
							lnbc1m1pjr8fhcpp5g4zlq6sqya0cfspd3sa7kmyamuu8z7qp9r2a2ev3ulxsrsm42usqdqu2askcmr9wssx7e3q2dshgmmndp5scqzpgxqyz5vqsp5xeksml74k3k3u968z73276ajswa24p9nq9g4zqpl8emaqgcdmy7q9qyyssqz7jly7j33u5f66dvu0kkd94mh96zwmq26k26t9q56nzk2ecwaqwst89lnktkjn0rkp4swv4z2sjhardpff8easl45cgd2aldscxy9cgqt4dwmg
						</Subheadline>
					</CopyWrapper>
					<Caption1>{`${copied ? 'Copied' : 'Copy'} to clipboard`}</Caption1>
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

const QRIcon = styled.Image`
	margin-top: 19px;
	margin-bottom: 24px;
`;

const CopyWrapper = styled.TouchableOpacity<{ copied: boolean }>`
	flex-direction: row;
	border: 1px solid #ff2d55;
	border-radius: 4px;
	background-color: ${p =>
		p.copied ? 'rgba(255, 45, 85, 0.2)' : 'transparent'};
	margin-bottom: 8px;
	padding-vertical: 4.5px;
	padding-horizontal: 9.5px;
	margin-horizontal: 21px;
`;
