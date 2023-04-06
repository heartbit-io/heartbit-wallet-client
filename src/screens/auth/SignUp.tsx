import { ScrollView, Text, View } from 'react-native';
import PINCode, { deleteUserPinCode } from '@haskkor/react-native-pincode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import * as hippocrat from '../../utils/hippocrat';
import { useAppSelector } from '../../hooks/hooks';

function SignUp({ navigation }: { navigation: any }) {
	const mnemonic: string = useAppSelector(state => state.mnemonic.value);

	return (
		<PINCode
			status="choose"
			maxAttempts={10}
			finishProcess={async (pinCode: string) => {
				const vault: string = await hippocrat.BtcWallet.generateEncryptedVault(
					mnemonic,
					pinCode,
				);
				const btcAddress: string = await hippocrat.BtcWallet.generateBtcAddress(
					await hippocrat.BtcWallet.getAddressFromAccount(
						await hippocrat.BtcWallet.getAccountFromMnemonic(mnemonic),
					),
				);
				const DID: hippocrat.BtcAccount =
					await hippocrat.BtcWallet.getNonBtcAccountFromMnemonic(mnemonic);
				await AsyncStorage.setItem('vault', vault);
				await AsyncStorage.setItem('btcAddress', btcAddress);
				await AsyncStorage.setItem('hpoDid', DID.toBase58());
				await deleteUserPinCode();
				navigation.replace('LogIn');
			}}
			passwordLength={6}
			titleChoose="Set Your Password for Wallet"
			subtitleChoose={' '}
			titleConfirm="Confirm Your Password for Wallet"
			subtitleConfirm={' '}
			stylePinCodeColorTitle="black"
			stylePinCodeButtonNumber="black"
			stylePinCodeColumnDeleteButton={{ marginTop: 15, marginRight: 5 }}
			stylePinCodeDeleteButtonSize={40}
			buttonDeleteText=""
		/>
	);
}

export default SignUp;
