import {Button, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import QRCode from 'react-native-qrcode-svg';

export function Receive() {

  const copyToClipboard = () : void => {
    Clipboard.setString('bc1qgdd50x082gaakk2j36xy7dt9kf7wwnfct3phy4');
  };

  return (
    <>
    <Text style={styles.text}>Show Your QR to Sender</Text>
    <Text></Text>
    <QRCode value='bc1qgdd50x082gaakk2j36xy7dt9kf7wwnfct3phy4' size={120} />
    <Text></Text>
    <Text>OR</Text>
    <Text></Text>
    <Text style={styles.text}>Show Your Address to Sender</Text>
    <Text></Text>
    <Text style={styles.text}>bc1qgdd50x082gaakk2j36xy7dt9kf7wwnfct3phy4</Text>
    <Text></Text>
    <TouchableOpacity onPress={() => copyToClipboard()}>
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

