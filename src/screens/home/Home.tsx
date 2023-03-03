import {ScrollView, Text, View} from 'react-native';

import React from 'react';
import { Receive } from '../../components/bitcoin/Receive';
import { Balance } from '../../components/bitcoin/Balance';
import { DID } from '../../components/did/DID'
import { Withdraw } from '../../components/bitcoin/Withdraw';

function Home() {
  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HeartBit</Text>
        <Text></Text>
        <Balance />
        <Text></Text>
        <Receive />
        <Text></Text>
        <DID />
        <Text></Text>
        <Withdraw />
      </View>
    </ScrollView>
  );
}

export default Home;
