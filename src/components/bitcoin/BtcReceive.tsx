import {Button, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import QRCode from 'react-native-qrcode-svg';
import Logo from '../../assets/Logo';

export function BtcReceive() {

  const copyToClipboard = () : void => {
    Clipboard.setString('bc1qgdd50x082gaakk2j36xy7dt9kf7wwnfct3phy4');
  };

  return (
    <>
    <Text style={styles.text}>My BTC Address</Text>
    <Text></Text>
    <QRCode value='bc1qgdd50x082gaakk2j36xy7dt9kf7wwnfct3phy4' size={200} 
    logo={{uri: Logo}}/>
    <Text></Text>
    <Text style={styles.text}>bc1qgdd50x082gaakk2j36xy7dt9kf7wwnfct3phy4</Text>
    <Text></Text>
    <TouchableOpacity onPress={() => copyToClipboard()}>
      <Text style={styles.smallText}>
        Click Here To Copy Address To Clipboard
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

