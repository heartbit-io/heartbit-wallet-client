import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// tabs
import DrawerTabs from './DrawerTabs';

// screens
import {
	Ask,
	Bounty,
	EmailSignUp,
	SplashScreen,
	Forum,
	EmailSent,
	MyQuestions,
	Transactions,
} from 'screens';

const Stack = createNativeStackNavigator<RootStackType>();

const Root = () => {
	return (
		<Stack.Navigator
			initialRouteName="SplashScreen"
			screenOptions={{
				headerTitle: '',
				headerShown: false,
				headerShadowVisible: false,
				headerStyle: { backgroundColor: '#FFF5ED' },
			}}
		>
			<Stack.Screen name="SplashScreen" component={SplashScreen} />
			<Stack.Screen
				name="EmailSignUp"
				component={EmailSignUp}
				options={{ gestureEnabled: false }}
			/>
			<Stack.Screen
				name="EmailSent"
				component={EmailSent}
				options={{ gestureEnabled: false }}
			/>
			<Stack.Screen
				name={'DrawerTabs'}
				component={DrawerTabs}
				options={{
					animation: 'fade',
					gestureEnabled: false,
				}}
			/>
			<Stack.Screen name="Ask" component={Ask} />
			<Stack.Screen name="Bounty" component={Bounty} />
			<Stack.Screen name="Forum" component={Forum} />
			<Stack.Screen name="MyQuestions" component={MyQuestions} />
			<Stack.Screen name="Transactions" component={Transactions} />
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
