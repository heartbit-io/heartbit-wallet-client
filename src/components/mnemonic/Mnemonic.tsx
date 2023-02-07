import {Button, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  generateMnemonic, selectMnemonic
} from './mnemonicSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import Clipboard from '@react-native-clipboard/clipboard';

export function Mnemonic() {
  const dispatch = useAppDispatch();

  const mnemonic = useAppSelector(selectMnemonic);

  const copyToClipboard = () => {
    Clipboard.setString(mnemonic);
  };

  return (
    <>
    <Text>
      <Button onPress={() => dispatch(generateMnemonic())} 
      title="generate mnemonic" />
    </Text>
    <Text>
      ***Touch below to copy your mnemonic to clipboard***
    </Text>
    <TouchableOpacity onPress={() => copyToClipboard()}>
      <Text>
        {mnemonic}
      </Text>
    </TouchableOpacity>
    </>
  );
}
