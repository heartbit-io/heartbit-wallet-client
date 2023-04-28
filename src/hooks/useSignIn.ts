import { useCallback, useState } from 'react';
import auth from '@react-native-firebase/auth';

type OnSignIn = (emailLink: string, email?: string | null) => void;

const useSignIn = (): [OnSignIn, boolean, boolean] => {
	const [loading, onLoadingChange] = useState(false);
	const [emailError, setEmailError] = useState(false);

	const onSignIn = useCallback<OnSignIn>(async (emailLink, email) => {
		try {
			onLoadingChange(true);
			if (!auth().isSignInWithEmailLink(emailLink)) {
				return;
			}

			if (!email) {
				return;
			}

			await auth().signInWithEmailLink(email, emailLink);
		} catch (error) {
			setEmailError(!!error);
			console.error(error);
		} finally {
			onLoadingChange(false);
		}
	}, []);

	return [onSignIn, loading, emailError];
};

export default useSignIn;
