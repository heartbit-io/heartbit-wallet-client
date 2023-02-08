import MyData from '../screens/myData/MyData';
import MyDataDetail from '../screens/myData/MyDataDetail';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MyDataStackNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen
        name="MyData"
        component={MyData}
        options={{title: 'My Data'}}
      />
      <Stack.Screen
        name="MyDataDetail"
        component={MyDataDetail}
        options={{title: 'My Data'}}
      />
    </Stack.Navigator>
  );
}

export default MyDataStackNavigator;
