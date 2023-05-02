import React, { useState } from 'react';
import styled from 'styled-components/native';
import QRCode from 'react-native-qrcode-svg';
import qrLogo from 'assets/logo/logo.svg';
import copyImg from 'assets/img/ic_copy_clipboard.png';
import Clipboard from '@react-native-clipboard/clipboard';
import { Caption1, Subheadline } from 'components/common';

type Props = {
	qrAddress: string;
};

const QRCodeHeartBit = ({ qrAddress }: Props) => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = (): void => {
		Clipboard.setString(qrAddress);
		setCopied(true);
		setTimeout(() => setCopied(false), 3000);
	};

	return (
		<Wrapper>
			<QRWrapper>
				<QRCode
					value={qrAddress}
					size={262}
					logo={qrLogo}
					logoSize={70}
					logoMargin={5}
					logoBorderRadius={15}
					logoBackgroundColor={'white'}
				/>
			</QRWrapper>
			<CopyButton onPress={copyToClipboard} copied={copied}>
				<CopyImg source={copyImg} />
				<LabelText>{qrAddress.substring(0, 27).concat('...')}</LabelText>
			</CopyButton>
			<CopyText>
				{copied ? 'Copied To clipboard' : 'Copy To clipboard'}
			</CopyText>
		</Wrapper>
	);
};

export default QRCodeHeartBit;

const Wrapper = styled.View`
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 50px;
`;

const QRWrapper = styled.View`
	width: 304px;
	height: 304px;
	background-color: white;
	align-items: center;
	justify-content: center;
`;

const CopyButton = styled.TouchableOpacity<{ copied?: boolean }>`
	flex-direction: row;
	width: 262px;
	height: 29px;
	border-width: 2px;
	margin-top: 26px;
	border-color: #ff2d55;
	background-color: ${({ copied }) => (copied ? '#FF2D5533' : '')};
`;

const LabelText = styled(Subheadline)`
	color: #ff2d55;
	margin-left: 12px;
	line-height: 22px;
`;

const CopyImg = styled.Image``;

const CopyText = styled(Caption1)`
	color: #3a3a3c;
	margin-top: 10px;
`;
