import {Button, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  selectDID
} from './DIDSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import Clipboard from '@react-native-clipboard/clipboard';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { BtcAccount } from '../../utils/hippocrat';

export function DID() {

  const DID : BtcAccount = useAppSelector(selectDID);

  const copyToClipboard = (didPubKey : string) : void => {
    Clipboard.setString(didPubKey);
  };

  return (
    <>
    <Text style={styles.text}>Your DID</Text>
    <Text style={styles.smallText}>did:btc:{DID.publicKey.toString('hex')}</Text>
    <TouchableOpacity onPress={() => 
      copyToClipboard('did:btc:'+DID.publicKey.toString('hex'))}>
      <Text style={styles.smallText}>
        Copy To Clipboard
      </Text>
    </TouchableOpacity>
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

