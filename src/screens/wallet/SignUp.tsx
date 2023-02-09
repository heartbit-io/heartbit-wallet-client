import {ScrollView, Text, View} from 'react-native';
import PINCode, {deleteUserPinCode} from '@haskkor/react-native-pincode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as hippocrat from '../../utils/hippocrat';
import React from 'react';

function SignUp() {
  return (
    <PINCode 
    status={'choose'} maxAttempts={10}
    finishProcess={async(pinCode) => {
      const vault = await hippocrat.BtcWallet.generateEncryptedVault("mnemonic", pinCode);
      await AsyncStorage.setItem("vault", vault);
      await deleteUserPinCode();
    }}
    onFail={(err)=> console.log(err)}
    passwordLength={6}
    titleChoose={"Set Your Password for Wallet"}
    subtitleChoose={" "}
    titleConfirm={"Confirm Your Password for Wallet"}
    subtitleConfirm={" "}
    stylePinCodeColorTitle={'black'}
    stylePinCodeButtonNumber={'black'}
    />
  );
}

export default SignUp;
