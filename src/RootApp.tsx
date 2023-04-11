import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeNavigator from './navigators/WelcomeNavigator';
import TabNavigator from './navigators/TabNavigator';
import EmailSignUp from './screens/auth/custodial/EmailSignUp';
import RootNavigator from './navigators/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

function RootApp(): JSX.Element {
	const [isUser, setIsUser] = useState(undefined);

	useEffect(() => {
		const checkEmailAndMnemonic = async () => {
			setIsUser(false);
			/* will be implemented in v2
			const mnemonicState = await AsyncStorage.getItem('vault');
			mnemonicState === null ? setIsUser(false) : setIsUser(true);
			*/
		};
		checkEmailAndMnemonic();
	});

	return isUser ? (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	) : (
		<WelcomeNavigator />
	);
}

export default RootApp;
