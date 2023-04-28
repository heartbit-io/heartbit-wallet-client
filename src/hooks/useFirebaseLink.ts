import { useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dynamicLinks from '@react-native-firebase/dynamic-links';

// hooks
import useSignIn from './useSignIn';

// utils
import { OS } from 'utils/utility';

const useFirebaseLink = (): [boolean, boolean, boolean] => {
	const [onSignIn, isSignedIn, isLoading, isError] = useSignIn();
	const [isSignInError, setSignInError] = useState(false);

	const handleDynamicLink = useCallback<(url: string) => void>(
		async url => {
			try {
				const email = await AsyncStorage.getItem('email');
				onSignIn(url, email);
			} catch (error) {
				console.error('Error while signing user in:', error);
				setSignInError(true);
			}
		},
		[onSignIn],
	);

	useEffect(() => {
		if (OS === 'android') {
			const unsubscribe = dynamicLinks().onLink(link =>
				handleDynamicLink(link.url),
			);
			return () => {
				unsubscribe();
			};
		}
	}, [handleDynamicLink]);

	useEffect(() => {
		if (OS === 'android') {
			let unsubscribed = false;

			async function getInitialLink() {
				const initialLink = await dynamicLinks().getInitialLink();

				if (initialLink && !unsubscribed) {
					handleDynamicLink(initialLink.url);
				}
			}
			getInitialLink();

			return () => {
				unsubscribed = true;
			};

			// Remove handleDynamicLink from the deps array to avoid redundant calls.

			// This hook should be called only once, at start.

			// eslint-disable-next-line react-hooks/exhaustive-deps
		}
	}, []);

	useEffect(() => {
		if (OS === 'ios') {
			const linking = Linking.addEventListener('url', ({ url }) => {
				handleDynamicLink(url);
			});

			return () => linking.remove();
		}
	}, []);

	return [isSignedIn, isLoading, isError || isSignInError];
};

export default useFirebaseLink;
