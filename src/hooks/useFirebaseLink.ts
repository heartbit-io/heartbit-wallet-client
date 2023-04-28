import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dynamicLinks, {
	FirebaseDynamicLinksTypes,
} from '@react-native-firebase/dynamic-links';

// hooks
import useSignIn from './useSignIn';

const useFirebaseLink = (): [boolean, boolean] => {
	const [onSignIn, isLoading, isError] = useSignIn();
	const [isSignInError, setSignInError] = useState(false);

	const handleDynamicLink = useCallback<
		(link: FirebaseDynamicLinksTypes.DynamicLink) => void
	>(
		async link => {
			try {
				const email = await AsyncStorage.getItem('email');
				onSignIn(link.url, email);
			} catch (error) {
				console.error('Error while signing user in:', error);
				setSignInError(true);
			}
		},
		[onSignIn],
	);

	useEffect(() => {
		const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
		return () => {
			unsubscribe();
		};
	}, [handleDynamicLink]);

	useEffect(() => {
		let unsubscribed = false;

		async function getInitialLink() {
			const initialLink = await dynamicLinks().getInitialLink();

			if (initialLink && !unsubscribed) {
				handleDynamicLink(initialLink);
			}
		}
		getInitialLink();

		return () => {
			unsubscribed = true;
		};

		// Remove handleDynamicLink from the deps array to avoid redundant calls.

		// This hook should be called only once, at start.

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return [isLoading, isError || isSignInError];
};

export default useFirebaseLink;
