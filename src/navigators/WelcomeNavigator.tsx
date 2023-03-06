import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/auth/Welcome';
import SignUp from '../screens/auth/SignUp';
import LogIn from '../screens/auth/LogIn';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function WelcomeNavigator(): JSX.Element {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="Tab" component={TabNavigator}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default WelcomeNavigator;
