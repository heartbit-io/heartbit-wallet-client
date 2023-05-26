import { useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import auth from '@react-native-firebase/auth';
import { useAppDispatch } from './hooks';

// utils
import { OS } from 'utils/utility';

// apis
import { api, apiLND } from 'apis';
import { postUser } from 'apis/userApi';

// store
import { setUserData } from 'store/slices/userSlice';

const useFirebaseLink = () => {
	const dispatch = useAppDispatch();
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
				const token = await auth().currentUser?.getIdToken();
				if (token) {
					api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
					apiLND.defaults.headers.common['Authorization'] = `Bearer ${token}`;
					const res = await postUser(email);
					if (res.success) {
						dispatch(setUserData(res.data));
						setSignInStatus('signedIn');
					}
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
				} else {
					handleDynamicLink(initialLink);
				}
			};

			getInitLink();

			return () => linking.remove();
		}
	}, []);

	return { signInStatus, isSignInError };
};

export default useFirebaseLink;
