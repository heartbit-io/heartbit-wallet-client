import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// stacks
import TabNavigator from './TabNavigator';

// screens
import EmailSignUp from 'screens/auth/custodial/EmailSignUp';

const Stack = createNativeStackNavigator<WelcomeNavigatorParamList>();

function WelcomeNavigator(): JSX.Element {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="EmailSignUp" component={EmailSignUp} />
				<Stack.Screen name="Tab" component={TabNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default WelcomeNavigator;
