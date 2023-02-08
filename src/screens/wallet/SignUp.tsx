import {ScrollView, Text, View} from 'react-native';

import {Password} from '../../components/password/Password';
import React from 'react';

function SignUp() {
  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Password />
      </View>
    </ScrollView>
  );
}

export default SignUp;
