import {ScrollView, Text, View} from 'react-native';

import React from 'react';

function MyData() {
  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>MyData Page</Text>
      </View>
    </ScrollView>
  );
}

export default MyData;
