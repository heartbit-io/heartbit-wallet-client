import {Button, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  generateMnemonic, selectMnemonic
} from './mnemonicSlice';
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
    <Text style={styles.text}>Generate your own recovery pharse</Text>
    <Text></Text>  
    <Text>
      <Button onPress={() => dispatch(generateMnemonic())} 
      title="generate recovery phrase" />
    </Text>
    <Text></Text>
    <Text style={styles.bigText}>
        {mnemonic.split(" ").slice(0, 6).map(word => word + " ")}
    </Text>
    <Text style={styles.bigText}>
        {mnemonic.split(" ").slice(6, 12).map(word => word + " ")}
    </Text>
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
    fontWeight: 'bold'
  },
  smallText: {
    fontSize: 10,
    fontWeight: 'bold'
  },
  bigText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

