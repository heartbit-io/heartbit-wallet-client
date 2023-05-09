import React, { useState } from 'react';
import styled from 'styled-components/native';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';

// assets
import qrLogo from 'assets/logo/logo.svg';
import copyImg from 'assets/img/copy.svg';

// components
import { Caption1, Subheadline } from 'components/common';

type Props = {
	qrAddress: string;
};

const QRCodeHeartBit = ({ qrAddress }: Props) => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		if (!copied) {
			Clipboard.setString(qrAddress);
			setCopied(true);
			setTimeout(() => setCopied(false), 3000);
		}
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
				<Subheadline numberOfLines={1} color={'#FF2D55'}>
					{qrAddress}
				</Subheadline>
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
`;

const QRWrapper = styled.View`
	width: 304px;
	height: 304px;
	background-color: white;
	align-items: center;
	justify-content: center;
	margin-bottom: 24px;
`;

const CopyButton = styled.TouchableOpacity<{ copied?: boolean }>`
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

const CopyImg = styled.Image`
	margin-right: 7px;
`;

const CopyText = styled(Caption1)`
	color: #3a3a3c;
	margin-top: 10px;
`;
