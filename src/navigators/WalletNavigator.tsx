import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/wallet/Welcome';
import SignUp from '../screens/wallet/SignUp';
import LogIn from '../screens/wallet/LogIn';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function WalletNavigator(): JSX.Element {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignUp" component={SignUp} />
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

export default WalletNavigator;
