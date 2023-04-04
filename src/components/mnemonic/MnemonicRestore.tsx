import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import * as hippocrat from '../../utils/hippocrat';
import { MnemonicSlice } from './MnemonicSlice';

export function MnemonicRestore({ navigation }: { navigation: any }) {
	const [mnemonic, setMnemonic] = useState('empty');
	const mnemonicHandler = (text: string) => {
		setMnemonic(text);
	};

	const dispatch: ThunkDispatch = useAppDispatch();

	return (
		<>
			<Text style={styles.bigText}>Import My Wallet Key</Text>
			<Text />
			<TextInput
				secureTextEntry
				textAlign="center"
				returnKeyType="next"
				multiline
				blurOnSubmit
				onChangeText={text => mnemonicHandler(text)}
				onSubmitEditing={async () => {
					const isValid = await hippocrat.BtcWallet.isMnemonicValid(mnemonic);
					if (isValid) {
						dispatch(MnemonicSlice.actions.setMnemonic(mnemonic));
						navigation.replace('SignUp');
					} else {
						alert('Invalid mnemonic. \nPlease check again.');
					}
				}}
				style={styles.mnemonic}
				placeholder="Recovery Phrase of 12 words"
			/>
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
	mnemonic: {
		height: '15%',
		width: '80%',
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'white',
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
});
