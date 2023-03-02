import {Button, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import QRCode from 'react-native-qrcode-svg';
import { UTXO, BtcRpcNode } from '../../utils/hippocrat';

export function Balance() {

  const [satoshi, setSatoshi] : [number, Function] = useState(0);

  useEffect(() => {
    const getBalance = async () : Promise<void> => {
        const userUTXO : UTXO[] = await BtcRpcNode.getUTXOList('bc1qgdd50x082gaakk2j36xy7dt9kf7wwnfct3phy4');
        let balance = 0;
        userUTXO.forEach((UTXO) => balance += UTXO.value);
        setSatoshi(balance);
    };
    getBalance();
  })

  return (
    <Text style={styles.text}>Balance: {satoshi.toLocaleString()} Sats</Text>
  );
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
  mnemonic: {
    height: '15%',
    width: '80%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  }
});

