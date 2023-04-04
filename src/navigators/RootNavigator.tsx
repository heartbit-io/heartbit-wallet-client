import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const RootStack = createNativeStackNavigator();

function RootNavigator(): JSX.Element {
	return (
		<NavigationContainer>
			<RootStack.Screen name="Tab" component={TabNavigator} />
		</NavigationContainer>
	);
}

export default RootNavigator;
