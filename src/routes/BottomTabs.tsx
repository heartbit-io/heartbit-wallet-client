import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import { Home, Wallet } from 'screens';

const Tab = createBottomTabNavigator<BottomTabTypes>();

const BottomTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: '#FF2D55',
				tabBarInactiveTintColor: '#8E8E93',
				tabBarStyle: { height: 60, paddingBottom: 5 },
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'Home') {
						iconName = focused
							? require('../assets/img/ic_home_selected.png')
							: require('../assets/img/ic_home_unselected.png');
					} else if (route.name === 'Wallet') {
						iconName = focused
							? require('../assets/img/ic_wallet_selected.png')
							: require('../assets/img/ic_wallet_unselected.png');
					}

					return (
						<Image source={iconName} style={{ width: size, height: size }} />
					);
				},
			})}
		>
			<Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
			<Tab.Screen
				name="Wallet"
				component={Wallet}
				options={{ title: 'Wallet' }}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabs;
