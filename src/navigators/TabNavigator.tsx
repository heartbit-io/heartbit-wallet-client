import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import MyDataStackNavigator from './MyDataStackNavigator';
import WalletNavigator from './WalletNavigator';
import Wallet from '../screens/wallet/Wallet';

const Tab = createBottomTabNavigator();

function TabNavigator(): JSX.Element {
	return (
		<Tab.Navigator
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
			<Tab.Screen
				name="WalletNavigator"
				component={WalletNavigator}
				options={{ title: 'Wallet' }}
			/>
		</Tab.Navigator>
	);
}

export default TabNavigator;
