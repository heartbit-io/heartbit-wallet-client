import {ScrollView, Text, View} from 'react-native';
import PINCode, {deleteUserPinCode} from '@haskkor/react-native-pincode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as hippocrat from '../../utils/hippocrat';
import React from 'react';

function LogIn({navigation}: {navigation: any}) {
  return (
    <PINCode 
    status={'enter'} maxAttempts={10}
    endProcessFunction={async(pinCode) => {
      try {
        const vault : string = await AsyncStorage.getItem("vault");
        const mnemonic : string = await hippocrat.BtcWallet.decryptVault(vault, pinCode);
        console.log(mnemonic); // must be deleted in production
        navigation.replace('Tab')
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
    buttonDeleteText={"delete"}
    stylePinCodeColumnDeleteButton={{marginTop: 15, marginRight: 5}}
    stylePinCodeDeleteButtonSize={40}
    buttonDeleteText={""}
    />
  );
}

export default LogIn;
