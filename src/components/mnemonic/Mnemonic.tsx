import {Button, Text, TouchableOpacity} from 'react-native';
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
    <Text>
      <Button onPress={() => dispatch(generateMnemonic())} 
      title="generate mnemonic" />
    </Text>
    <Text></Text>
    <Text>
        {mnemonic.split(" ").slice(0, 6).map(word => word + " ")}
    </Text>
    <Text>
        {mnemonic.split(" ").slice(6, 12).map(word => word + " ")}
    </Text>
    <Text></Text>
    <TouchableOpacity onPress={() => copyToClipboard()}>
      <Text>
        Copy To Clipboard
      </Text>
    </TouchableOpacity>
    </>
  );
}
