import {Button, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import * as hippocrat from '../../utils/hippocrat';

export function MnemonicRestore() {

  const [mnemonic, setMnemonic] = useState("empty");
  const mnemonicHandler = (text : string) => {
    setMnemonic(text);
  }

  return (
    <>
    <Text>Sign up with your existing recovery pharse</Text>
    <Text></Text>
    <TextInput secureTextEntry={true} textAlign='center'
     returnKeyType='next' multiline={true} blurOnSubmit={true}
     onChangeText={text => mnemonicHandler(text)}
     onSubmitEditing={async () => {
      await hippocrat.BtcWallet.isMnemonicValid(mnemonic)?
      console.log(mnemonic)
      : alert(`Invalid mnemonic. \nPlease check again.`)}}
     style={styles.mnemonic}
     placeholder='Recovery Phrase of 12 words'
    />
    </>
  );
}

const styles = StyleSheet.create({
  mnemonic: {
    height: '15%',
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
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
})