import {ScrollView, Button, Text, View, StyleSheet} from 'react-native';

import {Mnemonic} from '../../components/mnemonic/Mnemonic';
import {MnemonicRestore} from '../../components/mnemonic/MnemonicRestore';
import React from 'react';

function Welcome({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Mnemonic />
      <Text></Text>
      <Button onPress={() => navigation.replace('SignUp')} 
      title="set password to log in" />
      <Text></Text>
      <Text>OR</Text>
      <Text></Text>
      <MnemonicRestore />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    borderRadius: 25,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});



export default Welcome;
