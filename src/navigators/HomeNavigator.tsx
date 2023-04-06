import Ask from '../screens/home/Ask';
import Bounty from '../screens/home/Bounty';
import Forum from '../screens/forum/Forum';
import Home from '../screens/home/Home';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BestAnswer from '../screens/forum/BestAnswer';
import TransactionConfirm from '../screens/home/TransactionConfirm';

const Stack = createNativeStackNavigator();

function HomeNavigator(): JSX.Element {
	return (
		<Stack.Navigator screenOptions={{ headerShown: true }}>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					title: '',
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="Ask"
				component={Ask}
				options={{
					title: '',
					headerStyle: {
						backgroundColor: '#FFF5ED',
					},
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen
				name="Bounty"
				component={Bounty}
				options={{
					title: '',
					headerStyle: {
						backgroundColor: '#FFF5ED',
					},
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen
				name="Forum"
				component={Forum}
				options={{
					title: '',
					headerStyle: {
						backgroundColor: '#FFF5ED',
					},
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen
				name="BestAnswer"
				component={BestAnswer}
				options={{
					title: '',
					headerStyle: {
						backgroundColor: '#FFF5ED',
					},
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen
				name="TransactionConfirm"
				component={TransactionConfirm}
				options={{
					title: '',
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}

export default HomeNavigator;
