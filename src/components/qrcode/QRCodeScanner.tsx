import React, { useEffect, useRef, useState } from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { Camera, CameraType } from 'react-native-camera-kit';

import styled from 'styled-components/native';

type Props = {
	isScanned: boolean;
	setIsScanned: Function;
	onQRCodeRead: Function;
};

const QRCodeScanner = ({ isScanned, setIsScanned, onQRCodeRead }: Props) => {
	const ref = useRef(null);

	const { height, width } = useWindowDimensions();

	useEffect(() => {
		setIsScanned(true);
	}, []);

	return (
		<Wrapper width={width} height={height}>
			<Camera
				style={{ flex: 1 }}
				ref={ref}
				cameraType={CameraType.Back}
				// Barcode Scanner Props
				scanBarcode={true}
				showFrame={true}
				laserColor="transparent"
				frameColor="red"
				surfaceColor="red"
				onReadCode={onQRCodeRead}
				ratioOveray="16:9"
				ratioOverlayColor="#000000bf"
			/>
		</Wrapper>
	);
};

const Wrapper = styled.View<{ width: number; height: number }>`
	flex: 1;
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	background-color: #000000bf;
`;

export default QRCodeScanner;
