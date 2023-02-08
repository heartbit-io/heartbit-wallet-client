import {Button, Text, View} from 'react-native';

import React from 'react';

function MyDataDetail({navigation, route}: {navigation: any; route: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{route.params.title}</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

export default MyDataDetail;
