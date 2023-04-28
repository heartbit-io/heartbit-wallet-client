import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {
	const [idToken, onIdTokenChange] = useState<string | undefined>();
	const [isSignedIn, onSignedInChange] = useState<boolean | undefined>();

	useEffect(() => {
		const unsubscribe = auth().onIdTokenChanged(async user => {
			if (!user) {
				onSignedInChange(false);

				return;
			}
			// auth().signOut();
			const token = await user.getIdToken();
			onIdTokenChange(token);
			onSignedInChange(true);
		});

		return () => unsubscribe();
	}, []);

	return { idToken, isSignedIn };
};
export default useAuth;
