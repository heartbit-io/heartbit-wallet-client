import {Button, ScrollView, Text, View} from 'react-native';

import React from 'react';
import { Receive } from '../../components/bitcoin/Receive';
import { Balance } from '../../components/bitcoin/Balance';
import { Send } from '../../components/bitcoin/Send';

function Wallet() {
  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HeartBit</Text>
        <Text></Text>
        <Balance />
        <Button onPress={() => navigation.navigate('Receive')} 
        title="Receive" />
        <Button onPress={() => navigation.navigate('Send')} 
        title="Send" />
        <Text></Text>
      </View>
    </ScrollView>
  );
}

export default Wallet;
