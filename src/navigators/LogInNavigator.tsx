import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../screens/wallet/LogIn';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function LogInNavigator(): JSX.Element {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="LogIn" component={LogIn} options={{
              title: 'Log In',
            }} />
            <Stack.Screen name="Tab" component={TabNavigator} options={{
              title: 'HeartBit',
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LogInNavigator;
