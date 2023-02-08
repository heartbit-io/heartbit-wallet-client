import {ScrollView, Text, View} from 'react-native';

import {Mnemonic} from '../../components/mnemonic/Mnemonic';
import React from 'react';

function Welcome() {
  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Generate your own mnemonic</Text>
        <Text></Text>
        <Mnemonic />
        <Text></Text>
        <Text>Please store mnemonic in very safe place</Text>
      </View>
    </ScrollView>
  );
}

export default Welcome;
