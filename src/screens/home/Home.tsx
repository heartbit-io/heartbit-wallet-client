import {ScrollView, Text, View} from 'react-native';

import {Counter} from '../../components/counter/Counter';
import React from 'react';

function Home() {
  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>**********Redux Tookit Test Counter**********</Text>
        <Counter />
        <Text>**********Redux Tookit Test Counter**********</Text>
      </View>
    </ScrollView>
  );
}

export default Home;
