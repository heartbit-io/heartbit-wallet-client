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
				await AsyncStorage.setItem('vault', vault);
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
