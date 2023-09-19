/*

scope for v2

import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import QRCode from 'react-native-qrcode-svg';
import { UTXO, BtcRpcNode } from '../../utils/hippocrat';
import { selectBtcAddress } from './BtcAddressSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function BtcBalance() {
	const [satoshi, setSatoshi]: [number, Function] = useState(0);

	useEffect(() => {
		const getBalance = async (): Promise<void> => {
			const btcAddress: string = await AsyncStorage.getItem('btcAddress');
			const userUTXO: UTXO[] = await BtcRpcNode.getUTXOList(btcAddress);
			let balance = 0;
			userUTXO.forEach(UTXO => (balance += UTXO.value));
			setSatoshi(balance);
		};
		getBalance();
	});

	return <Text style={styles.veryBigText}>{satoshi.toLocaleString()} sat</Text>;
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
	veryBigText: {
		fontSize: 36,
		fontWeight: 'bold',
	},
});

*/
