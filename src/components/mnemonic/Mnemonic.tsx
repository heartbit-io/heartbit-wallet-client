/*

scope for v2

import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { generateMnemonic, selectMnemonic } from './MnemonicSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Clipboard from '@react-native-clipboard/clipboard';
import { ThunkDispatch } from '@reduxjs/toolkit';

export function Mnemonic({ navigation }: { navigation: any }) {
	const dispatch: ThunkDispatch = useAppDispatch();

	const mnemonic: string = useAppSelector(selectMnemonic);

	const copyToClipboard = (): void => {
		Clipboard.setString(mnemonic);
	};

	return (
		<>
			<Text style={styles.text}>Welcome to HeartBit Wallet👋</Text>
			<Text style={styles.text}>To use our service,</Text>
			<Text style={styles.text}>Please create your own wallet key🙏</Text>
			<Text></Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => dispatch(generateMnemonic())}
			>
				<Text style={styles.bigText}>Create Wallet Key</Text>
			</TouchableOpacity>
			<Text></Text>
			<View style={styles.mnemonic}>
				<Text style={styles.text}>
					{mnemonic.length === 0
						? ''
						: mnemonic
								.split(' ')
								.slice(0, 4)
								.map((word, index) => index + 1 + '. ' + word + '  ')}
				</Text>
				<Text style={styles.text}>
					{mnemonic
						.split(' ')
						.slice(4, 8)
						.map((word, index) => index + 5 + '. ' + word + '  ')}
				</Text>
				<Text style={styles.text}>
					{mnemonic
						.split(' ')
						.slice(8, 12)
						.map((word, index) => index + 9 + '. ' + word + '  ')}
				</Text>
			</View>
			<Text></Text>
			<TouchableOpacity onPress={() => copyToClipboard()}>
				<Text style={styles.smallText}>Copy To Clipboard</Text>
			</TouchableOpacity>
			<Text></Text>
			<Text style={styles.text}>
				Please save your wallet key somewhere safe for back up,
			</Text>
			<Text style={styles.text}>In case to recover in other device💻</Text>
			<Text style={styles.text}>
				Be aware! If revealed, your fund and data could be stolen😱
			</Text>
			<Text></Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() =>
					mnemonic === ''
						? alert('Please create your own wallet key first!')
						: navigation.replace('SignUp')
				}
			>
				<Text style={styles.bigText}>Set Password to Login</Text>
			</TouchableOpacity>
			<Text></Text>
			<Text></Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.replace('Restore')}
			>
				<Text style={styles.bigText}>Already Have Wallet Key? Click Here!</Text>
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	rowContainer: {
		flex: 0.3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	contentArea: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		width: '80%',
		height: '7.5%',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 10,
	},
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
		borderWidth: 2,
		borderColor: 'black',
		backgroundColor: 'white',
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
	},
});
*/
