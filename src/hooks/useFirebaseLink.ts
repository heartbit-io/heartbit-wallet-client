import { useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import auth from '@react-native-firebase/auth';

// utils
import { OS } from 'utils/utility';

// apis
import { api } from 'apis';

const useFirebaseLink = () => {
	const [isSignInError, setSignInError] = useState(false);
	const [signInStatus, setSignInStatus] = useState<string>('loading');

	const handleDynamicLink = useCallback<(url: string) => void>(async url => {
		try {
			const email = await AsyncStorage.getItem('email');
			if (!auth().isSignInWithEmailLink(url)) {
				setSignInStatus('notSignedIn');
				return;
			}

			if (!email) {
				setSignInStatus('notSignedIn');
				return;
			}

			const res = await auth().signInWithEmailLink(email, url);
			if (res.user) {
				setSignInStatus('signedIn');
				const token = await auth().currentUser?.getIdToken();
				if (token) {
					api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
					api.post('/users', {
						pubkey: email,
						email: email,
						role: 'user',
						btcBalance: 10000,
					});
				}
			}
		} catch (error) {
			console.error('Error while signing user in:', error);
			setSignInError(true);
		}
	}, []);

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
				} else {
					setSignInStatus('notSignedIn');
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

			const getInitLink = async () => {
				const initialLink = await Linking.getInitialURL();
				if (!initialLink) {
					setSignInStatus('notSignedIn');
				}
			};

			getInitLink();

			return () => linking.remove();
		}
	}, []);

	return { signInStatus, isSignInError };
};

export default useFirebaseLink;
