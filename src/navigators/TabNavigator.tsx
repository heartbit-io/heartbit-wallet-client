import HomeNavigator from './HomeNavigator';
import { Image } from 'react-native';
import React from 'react';
import WalletNavigator from './WalletNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigator(): JSX.Element {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: '#FF2D55',
				tabBarInactiveTintColor: '#8E8E93',
				tabBarStyle: { height: 60, paddingBottom: 5 },
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'HomeNavigator') {
						iconName = focused ? require('../assets/img/ic_home_selected.png') : require('../assets/img/ic_home_unselected.png');
					} else if (route.name === 'WalletNavigator') {
						iconName = focused ? require('../assets/img/ic_wallet_selected.png') : require('../assets/img/ic_wallet_unselected.png');
					}

					return <Image source={iconName} style={{ width: size, height: size }} />;
				},
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
