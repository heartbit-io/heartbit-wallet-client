import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// tabs
import BottomTabs from './BottomTabs';

// screens
import { Ask, Bounty, EmailSignUp, SplashScreen, Forum } from 'screens';

const Stack = createNativeStackNavigator<RootStackType>();

const Root = () => {
	return (
		<Stack.Navigator
			initialRouteName="SplashScreen"
			screenOptions={{
				headerTitle: '',
				headerShadowVisible: false,
				headerStyle: { backgroundColor: '#FFF5ED' },
			}}
		>
			<Stack.Screen
				name="SplashScreen"
				component={SplashScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="EmailSignUp"
				component={EmailSignUp}
				options={{ headerShown: false, gestureEnabled: false }}
			/>
			<Stack.Screen
				name={'BottomTabs'}
				component={BottomTabs}
				options={{
					animation: 'fade',
					headerShown: false,
					gestureEnabled: false,
				}}
			/>
			<Stack.Screen name="Ask" component={Ask} />
			<Stack.Screen name="Bounty" component={Bounty} />
			<Stack.Screen name="Forum" component={Forum} />
		</Stack.Navigator>
	);
};

const Layout = () => {
	return (
		<NavigationContainer>
			<Root />
		</NavigationContainer>
	);
};

export default Layout;
