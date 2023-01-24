import {ScrollView, Text, View} from 'react-native';

import React from 'react';

function Settings() {
  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Settings Page</Text>
      </View>
    </ScrollView>
  );
}

export default Settings;
