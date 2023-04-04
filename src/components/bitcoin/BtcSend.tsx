import {
	Alert,
	Text,
	TouchableOpacity,
	Linking,
	StyleSheet,
	TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	BtcNetwork,
	BtcSigner,
	TxFee,
	BtcReceiver,
	BtcPayment,
} from '../../utils/hippocrat';

export function BtcSend() {
	const [satoshi, setSatoshi] = useState(0);
	const [toAddress, setToAddress] = useState('');
	const satoshiHandler = (satoshi: string) => {
		setSatoshi(parseInt(satoshi));
	};
	const toAddressHandler = (toAddress: string) => {
		setToAddress(toAddress);
	};

	return (
		<>
			<Text>Enter Satoshi To Send</Text>
			<TextInput
				textAlign="center"
				returnKeyType="next"
				multiline={false}
				blurOnSubmit
				onChangeText={satoshi => satoshiHandler(satoshi)}
				keyboardType="number-pad"
				style={styles.input}
				placeholder="Satoshi To Send"
			/>
			<Text>Enter Address To Send</Text>
			<TextInput
				textAlign="center"
				returnKeyType="next"
				multiline={false}
				blurOnSubmit
				onChangeText={toAddress => toAddressHandler(toAddress)}
				onSubmitEditing={async () => {
					try {
						// mnemonic hard-coded just for test
						const mnemonic =
							'영남 진리 실력 생산 여대생 권리 내일 얼핏 졸업 형제 행사 경비';
						const btcNetwork: BtcNetwork = BtcNetwork.Testnet; // Mainnet is default, Testnet for test
						const btcSigner: BtcSigner = await BtcPayment.getBtcSigner(
							mnemonic,
							btcNetwork,
						);
						const txId: string = await BtcPayment.transferBtc(btcSigner, [
							{
								address: toAddress, // 'mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfn',
								value: satoshi,
							},
						] as BtcReceiver[]);
						Alert.alert(
							'Transaction Result',
							'Transaction has successfully broadcasted! Waiting for confirmation.',
							[
								{
									text: 'Click here to explorer transaction',
									onPress: () =>
										Linking.openURL(
											`https://blockstream.info/testnet/tx/${txId}`,
										),
								},
								{ text: 'Ok', onPress: () => console.log('OK Pressed') },
							],
						);
					} catch (e) {
						Alert.alert(
							'Transaction Result',
							'Transaction has failed. Try again later.',
							[{ text: 'Ok', onPress: () => console.log('OK Pressed') }],
						);
					}
				}}
				style={styles.input}
				placeholder="Address To Send"
			/>
		</>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	smallText: {
		fontSize: 10,
		fontWeight: 'bold',
	},
	bigText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	input: {
		height: '15%',
		width: '80%',
		borderWidth: 0.5,
		backgroundColor: 'white',
		borderColor: 'black',
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
	},
});
