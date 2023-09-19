/*

scope for v2

import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import QRCode from 'react-native-qrcode-svg';
import Logo from '../../assets/Logo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function BtcReceive() {
	const [btcAddress, setBtcAddress]: [string, Function] = useState('');

	useEffect(() => {
		const getAddress = async (): Promise<void> => {
			setBtcAddress(await AsyncStorage.getItem('btcAddress'));
		};
		getAddress();
	});

	const copyToClipboard = (): void => {
		Clipboard.setString(btcAddress);
	};

	return btcAddress === '' ? (
		<Text>Waiting to load</Text>
	) : (
		<>
			<Text style={styles.text}>My BTC Address</Text>
			<Text />
			<QRCode value={btcAddress} size={200} logo={{ uri: Logo }} />
			<Text />
			<Text style={styles.text}>{btcAddress}</Text>
			<Text />
			<TouchableOpacity onPress={() => copyToClipboard()}>
				<Text style={styles.smallText}>
					Click Here To Copy Address To Clipboard
				</Text>
			</TouchableOpacity>
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
	mnemonic: {
		height: '15%',
		width: '80%',
		borderRadius: 10,
		borderWidth: 0.5,
		borderColor: 'black',
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
	},
});

*/
