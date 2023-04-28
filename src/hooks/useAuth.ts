import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {
	const [idToken, onIdTokenChange] = useState<string | undefined>();
	const [isAuthorized, onAuthorizationChanged] = useState<
		boolean | undefined
	>();

	useEffect(() => {
		const unsubscribe = auth().onIdTokenChanged(async user => {
			console.log('AUTH USER>>>>', user);
			if (!user) {
				onAuthorizationChanged(false);

				return;
			}
			// auth().signOut();
			const token = await user.getIdToken();
			onIdTokenChange(token);
			onAuthorizationChanged(true);
		});

		return () => unsubscribe();
	}, []);

	return { idToken, isAuthorized };
};
export default useAuth;
