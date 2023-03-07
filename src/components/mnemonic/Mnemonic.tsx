import {Button, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  generateMnemonic, selectMnemonic
} from './MnemonicSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import Clipboard from '@react-native-clipboard/clipboard';
import { ThunkDispatch } from '@reduxjs/toolkit';

export function Mnemonic() {
  const dispatch : ThunkDispatch = useAppDispatch();

  const mnemonic : string = useAppSelector(selectMnemonic);

  const copyToClipboard = () : void => {
    Clipboard.setString(mnemonic);
  };

  return (
    <>
    <Text style={styles.text}>Welcome to HeartBit Wallet!</Text>
    <Text style={styles.text}>To use our service,</Text>
    <Text style={styles.text}>Please generate your own recovery phrase!</Text>
    <Text></Text>  
    <Text>
      <Button onPress={() => dispatch(generateMnemonic())} 
      title="generate recovery phrase" />
    </Text>
    <Text></Text>
    <View style={styles.mnemonic}>
    <Text style={styles.text}>
        {mnemonic.length === 0 ? "" :
        mnemonic.split(" ").slice(0, 4).map((word, index) => index+1 + ". " + word + "  ")}
    </Text>
    <Text style={styles.text}>
        {mnemonic.split(" ").slice(4, 8).map((word, index) => index+5 + ". " + word + "  ")}
    </Text>
    <Text style={styles.text}>
        {mnemonic.split(" ").slice(8, 12).map((word, index) => index+9 + ". " + word + "  ")}
    </Text>
    </View>
    <Text></Text>
    <TouchableOpacity onPress={() => copyToClipboard()}>
      <Text style={styles.smallText}>
        Copy To Clipboard
      </Text>
    </TouchableOpacity>
    <Text></Text>
    <Text style={styles.text}>Please save your recovery phrase in very safe place</Text>
    <Text style={styles.text}>If revealed, your fund and data will be stolen</Text>
    </>
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

