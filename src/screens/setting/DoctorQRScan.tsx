import { QRCodeScanner } from 'components';
import { useState } from 'react';
import { Alert, Vibration } from 'react-native';

const DoctorQRScan = () => {
	const [isScanned, setIsScanned] = useState<boolean>(true);

	const onQRCodeRead = (event: any) => {
		if (!isScanned) return;
		setIsScanned(false);
		Vibration.vibrate();
		Alert.alert('QR Code', event.nativeEvent.codeStringValue, [
			{ text: 'OK', onPress: () => setIsScanned(true) },
		]);
	};

	return (
		<QRCodeScanner
			isScanned={isScanned}
			setIsScanned={setIsScanned}
			onQRCodeRead={onQRCodeRead}
		/>
	);
};
export default DoctorQRScan;
