import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// stack screens
import WelcomeNavigator from './navigators/WelcomeNavigator';
import TabNavigator from './navigators/TabNavigator';

// hooks
import { useAuth, useFirebaseLink } from 'hooks';

function RootApp(): JSX.Element {
	const { isAuthorized } = useAuth();
	const [isSignedIn, isLoading, isError] = useFirebaseLink();

	if (isAuthorized || isSignedIn) {
		return (
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		);
	}
	return <WelcomeNavigator />;
}

export default RootApp;
