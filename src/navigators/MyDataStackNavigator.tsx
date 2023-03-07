import MyData from '../screens/myData/MyData';
import MyDataDemographics from '../screens/myData/MyDataDemographics';
import MyDataDetail from '../screens/myData/MyDataDetail';
import MyDataIssuer from '../screens/myData/MyDataIssuer';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MyDataStackNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyData"
        component={MyData}
        options={{title: 'My Data'}}
      />
      <Stack.Screen name="MyDataDetail" component={MyDataDetail} />
      <Stack.Screen name="MyDataIssuer" component={MyDataIssuer} />
      <Stack.Screen name="MyDataDemographics" component={MyDataDemographics} />
    </Stack.Navigator>
  );
}

export default MyDataStackNavigator;
