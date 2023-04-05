import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WalletNavigator from './WalletNavigator';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

function TabNavigator(): JSX.Element {
	return (
		<Tab.Navigator
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<Tab.Screen
				name="HomeNavigator"
				component={HomeNavigator}
				options={{ title: 'Home' }}
			/>
			<Tab.Screen
				name="WalletNavigator"
				component={WalletNavigator}
				options={{ title: 'Wallet' }}
			/>
		</Tab.Navigator>
	);
}

export default TabNavigator;
