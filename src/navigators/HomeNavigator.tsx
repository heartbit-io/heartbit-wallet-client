import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator();

function HomeNavigator(): JSX.Element {
	return (
		<Stack.Navigator screenOptions={{ headerShown: true }}>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
}

export default HomeNavigator;
