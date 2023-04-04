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
			<Stack.Screen name="HeartBit Wallet" component={Wallet} />
			<Stack.Screen name="Receive" component={Receive} />
			<Stack.Screen name="Send" component={Send} />
		</Stack.Navigator>
	);
}

export default WalletNavigator;
