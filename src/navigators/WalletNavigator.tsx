import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Wallet from '../screens/wallet/Wallet';
import Receive from '../screens/wallet/Receive';
import Send from '../screens/wallet/Send';

const Stack = createNativeStackNavigator();

function WalletNavigator(): JSX.Element {
	return (
		<Stack.Navigator screenOptions={{ headerShown: true }}>
			<Stack.Screen
				name="HeartBit Wallet"
				component={Wallet}
				options={{
					title: '',
					headerStyle: {
						backgroundColor: '#FFF5ED',
					},
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen
				name="Receive"
				component={Receive}
				options={{
					title: '',
					headerStyle: {
						backgroundColor: '#FFF5ED',
					},
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen
				name="Send"
				component={Send}
				options={{
					title: '',
					headerStyle: {
						backgroundColor: '#FFF5ED',
					},
					headerShadowVisible: false,
				}}
			/>
		</Stack.Navigator>
	);
}

export default WalletNavigator;
