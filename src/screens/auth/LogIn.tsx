import { ScrollView, Text, View } from 'react-native';
import PINCode, { deleteUserPinCode } from '@haskkor/react-native-pincode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThunkDispatch } from '@reduxjs/toolkit';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import * as hippocrat from '../../utils/hippocrat';
import { DIDSlice } from '../../components/did/DIDSlice';
import { BtcAddressSlice } from '../../components/bitcoin/BtcAddressSlice';

function LogIn({ navigation }: { navigation: any }) {
	const dispatch: ThunkDispatch = useAppDispatch();

	return (
		<PINCode
			status="enter"
			maxAttempts={10}
			endProcessFunction={async pinCode => {
				try {
					const vault: string = await AsyncStorage.getItem('vault');
					const mnemonic: string = await hippocrat.BtcWallet.decryptVault(
						vault,
						pinCode,
					); /*
					const btcAddress: string =
						await hippocrat.BtcWallet.generateBtcAddress(
							await hippocrat.BtcWallet.getAddressFromAccount(
								await hippocrat.BtcWallet.getAccountFromMnemonic(mnemonic),
							),
						);
					const DID: hippocrat.BtcAccount =
						await hippocrat.BtcWallet.getNonBtcAccountFromMnemonic(mnemonic);
					dispatch(BtcAddressSlice.actions.setBtcAddress(btcAddress));
					dispatch(DIDSlice.actions.setDID(DID));*/
					navigation.replace('Tab');
				} catch (e) {
					console.log(e);
					alert('Password is incorrect');
					navigation.replace('LogIn');
				}
			}}
			passwordLength={6}
			titleEnter="Enter Your Password to Unlock Wallet"
			stylePinCodeColorTitle="black"
			stylePinCodeButtonNumber="black"
			touchIDDisabled
			buttonDeleteText="delete"
			stylePinCodeColumnDeleteButton={{ marginTop: 15, marginRight: 5 }}
			stylePinCodeDeleteButtonSize={40}
			buttonDeleteText=""
		/>
	);
}

export default LogIn;
