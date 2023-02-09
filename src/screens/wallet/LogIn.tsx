import {ScrollView, Text, View} from 'react-native';
import PINCode, {deleteUserPinCode} from '@haskkor/react-native-pincode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as hippocrat from '../../utils/hippocrat';
import React from 'react';

function LogIn() {
  return (
    <PINCode 
    status={'enter'} maxAttempts={10}
    endProcessFunction={async(pinCode) => {
      try {
        const vault = await AsyncStorage.getItem("vault");
        const mnemonic = await hippocrat.BtcWallet.decryptVault(vault, pinCode);
        console.log(mnemonic);
      } catch (e) {
        console.log(e);
        alert("Password is incorrect")
      }
    }}
    passwordLength={6}
    titleEnter={"Enter Your Password to Unlock Wallet"}
    stylePinCodeColorTitle={'black'}
    stylePinCodeButtonNumber={'black'}
    touchIDDisabled={true}
    />
  );
}

export default LogIn;
