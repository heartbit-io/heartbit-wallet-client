import { API_URL } from '@env';
import { authDoctor } from 'apis/doctorApi';
import { QRCodeScanner } from 'components';
import { useState } from 'react';
import { Alert, Vibration } from 'react-native';

const DoctorQRScan = () => {
	const [isScanned, setIsScanned] = useState<boolean>(true);

	const onQRCodeRead = async (event: any) => {
		if (!isScanned) return;
		setIsScanned(false);
		if (event.nativeEvent.codeStringValue === API_URL + 'doctors/login') {
			try {
				Vibration.vibrate();
				const responseDto: ResponseDto<string> = await authDoctor();
				responseDto.statusCode === 200
					? Alert.alert(
							responseDto.message,
							'Welcome to Heartbit doctor portal',
							[{ text: 'OK', onPress: () => setIsScanned(true) }],
					  )
					: Alert.alert(responseDto.message, 'Try again later');
			} catch (err) {
				console.error(err);
			}
		} else {
			Alert.alert('Invalid QR Code', 'Try again later');
		}
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
