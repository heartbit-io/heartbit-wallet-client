import {Button, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import { BtcNetwork, BtcSigner, TxFee, BtcReceiver, BtcPayment } from '../../utils/hippocrat';

export function Send() {
    const [satoshi, setSatoshi] = useState(0);
    const [toAddress, setToAddress] = useState("");
    const satoshiHandler = (satoshi : string) => {
      setSatoshi(parseInt(satoshi));
    }
    const toAddressHandler = (toAddress : string) => {
        setToAddress(toAddress);
    }
  
    return (
      <>
      <Text>Enter Satoshi To Send</Text>
      <TextInput textAlign='center' returnKeyType='next' 
      multiline={false} blurOnSubmit={true}
      onChangeText={satoshi => satoshiHandler(satoshi)}
      keyboardType={'number-pad'} style={styles.input}
      placeholder='Satoshi To Send' />
      <Text>Enter Address To Send</Text>
      <TextInput textAlign='center' returnKeyType='next' 
      multiline={false} blurOnSubmit={true}
      onChangeText={toAddress => toAddressHandler(toAddress)}
      onSubmitEditing={async () => {
        // mnemonic hard-coded just for test
        const mnemonic : string = "영남 진리 실력 생산 여대생 권리 내일 얼핏 졸업 형제 행사 경비";
        const btcNetwork : BtcNetwork = BtcNetwork.Testnet; // Mainnet is default, Testnet for test
        const btcSigner : BtcSigner = await BtcPayment.getBtcSigner(mnemonic, btcNetwork);
        const txId : string = await BtcPayment.transferBtc(btcSigner, 
                [{
                    address: toAddress,//'mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfn',
                    value: satoshi
                }] as BtcReceiver[]
        );
        alert(`Transaction is broadcasted to network, waiting for confirm. Tx Id: ${txId}`)
       }}
       style={styles.input}
       placeholder='Address To Send' />
      </>
    )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 10,
    fontWeight: 'bold'
  },
  bigText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  input: {
    height: '6%',
    width: '80%',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderColor: 'black',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  }
});