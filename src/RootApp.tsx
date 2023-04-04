import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeNavigator from './navigators/WelcomeNavigator';
import LogInNavigator from './navigators/LogInNavigator';

function RootApp(): JSX.Element {
	const [isUser, setIsUser] = useState(undefined);

	useEffect(() => {
		const checkMnemonic = async () => {
			// await AsyncStorage.clear();
			const mnemonicState = await AsyncStorage.getItem('vault');
			mnemonicState === null ? setIsUser(false) : setIsUser(true);
		};
		checkMnemonic();
	});

	return isUser ? <LogInNavigator /> : <WelcomeNavigator />;
}

export default RootApp;
