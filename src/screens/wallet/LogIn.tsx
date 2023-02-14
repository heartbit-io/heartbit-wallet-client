import {ScrollView, Text, View} from 'react-native';
import PINCode, {deleteUserPinCode} from '@haskkor/react-native-pincode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import { ThunkDispatch } from '@reduxjs/toolkit';
import {mnemonicSlice} from '../../components/mnemonic/mnemonicSlice';
import * as hippocrat from '../../utils/hippocrat';
import React from 'react';

function LogIn({navigation}: {navigation: any}) {

  const dispatch : ThunkDispatch = useAppDispatch();

  return (
    <PINCode 
    status={'enter'} maxAttempts={10}
    endProcessFunction={async(pinCode) => {
      try {
        const vault : string = await AsyncStorage.getItem("vault");
        dispatch(mnemonicSlice.actions.setMnemonic(
          await hippocrat.BtcWallet.decryptVault(vault, pinCode)
        ));
        navigation.replace('Tab');
      } catch (e) {
        console.log(e);
        alert("Password is incorrect");
        navigation.replace('LogIn')
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