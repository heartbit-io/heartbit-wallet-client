import {Button, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import * as hippocrat from '../../utils/hippocrat';

export function MnemonicRestore() {

  const [mnemonic, setMnemonic] = useState("empty");
  const mnemonicHandler = (text : string) => {
    setMnemonic(text);
  }

  return (
    <TextInput secureTextEntry={true} textAlign='center'
     returnKeyType='next' multiline={true} blurOnSubmit={true}
     onChangeText={text => mnemonicHandler(text)}
     onSubmitEditing={async () => {
      await hippocrat.BtcWallet.isMnemonicValid(mnemonic)?
      console.log(mnemonic)
      : alert(`Invalid mnemonic. \nPlease check again.`)}}
     style={styles.mnemonic}
    />
  );
}

const styles = StyleSheet.create({
  mnemonic: {
    height: '20%',
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white'
  }
})
