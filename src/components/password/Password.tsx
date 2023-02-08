import {Button, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useAppSelector} from '../../hooks/hooks';
import * as hippocrat from '../../utils/hippocrat';

export function Password() {

  const [password, setPassword] = useState("999999");
  const passwordHandler = (text : string) => {
    setPassword(text);
  }

  const [passwordCheck, setPasswordCheck] = useState("999999");
  const passwordCheckHandler = (text : string) => {
    setPasswordCheck(text);
  }

  const mnemonic : string = useAppSelector(state => state.mnemonic.value);

  return (
    <>
    <Text>
      Set Your Password
    </Text>
    <TextInput secureTextEntry={true} textAlign='center'
     maxLength={6} keyboardType='number-pad'
     returnKeyType='next' 
     onChangeText={text => passwordHandler(text)}
     style={styles.password}
     />
    <Text>
      Check Your Password
    </Text>
    <TextInput secureTextEntry={true} textAlign='center'
     maxLength={6} keyboardType='number-pad'
     returnKeyType='next' 
     onChangeText={text => passwordCheckHandler(text)}
     onSubmitEditing={async () => {
      password === passwordCheck ?
      console.log(await hippocrat.BtcWallet.generateEncryptedVault(mnemonic, password))
      : alert(`Password does not match. \nPlease check again.`)}}
     style={styles.password}
    />
    </>
  );
}

const styles = StyleSheet.create({
  password: {
    height: '10%',
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white'
  }
})
