import React from 'react';
import {
	NavigationContainer,
	createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// tabs
import DrawerTabs from './DrawerTabs';

// screens
import {
	IllnessAsk,
	GeneralAsk,
	Bounty,
	EmailSignUp,
	SplashScreen,
	Forum,
	EmailSent,
	MyQuestions,
	Transactions,
	WebViewScreen,
	HealthRecord,
} from 'screens';
import DoctorQRScan from 'screens/setting/DoctorQRScan';
import MyAccount from 'screens/drawer/MyAccount';

const Stack = createNativeStackNavigator<RootStackType>();
export const navigationRef = createNavigationContainerRef<RootStackType>();

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
				options={{ animation: 'fade', gestureEnabled: false }}
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
			<Stack.Screen
				name="IllnessAsk"
				component={IllnessAsk}
				options={{ animationTypeForReplace: 'pop', gestureEnabled: false }}
			/>
			<Stack.Screen
				name="GeneralAsk"
				component={GeneralAsk}
				options={{ animationTypeForReplace: 'push', gestureEnabled: false }}
			/>
			<Stack.Screen name="Bounty" component={Bounty} />
			<Stack.Screen
				name="Forum"
				component={Forum}
				options={{ gestureEnabled: false }}
			/>
			<Stack.Screen name="MyQuestions" component={MyQuestions} />
			<Stack.Screen name="Transactions" component={Transactions} />
			<Stack.Screen name="MyAccount" component={MyAccount} />
			<Stack.Screen name="DoctorQRScan" component={DoctorQRScan} />
			<Stack.Screen name="WebViewScreen" component={WebViewScreen} />
			<Stack.Screen name="HealthRecord" component={HealthRecord} />
		</Stack.Navigator>
	);
};

const Layout = () => {
	return (
		<NavigationContainer ref={navigationRef}>
			<Root />
		</NavigationContainer>
	);
};

export default Layout;
