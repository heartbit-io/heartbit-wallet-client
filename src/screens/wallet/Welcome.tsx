import {ScrollView, Text, View} from 'react-native';

import {Mnemonic} from '../../components/mnemonic/Mnemonic';
import {MnemonicRestore} from '../../components/mnemonic/MnemonicRestore';
import React from 'react';

function Welcome() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Generate your own mnemonic</Text>
      <Text></Text>
      <Mnemonic />
      <Text></Text>
      <Text>Please store mnemonic in very safe place</Text>
      <Text></Text>
      <Text>OR</Text>
      <Text></Text>
      <Text>Import mnemonic to import existing wallet</Text>
      <MnemonicRestore />
    </View>
  );
}

export default Welcome;
