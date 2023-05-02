import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {
	const [idToken, onIdTokenChange] = useState<string | undefined>();
	const [authStatus, setAuthStatus] = useState<string>('loading');

	useEffect(() => {
		const unsubscribe = auth().onIdTokenChanged(async user => {
			if (!user) {
				setAuthStatus('unauthorized');
				return;
			}
			// auth().signOut();
			const token = await user.getIdToken();
			onIdTokenChange(token);
			setAuthStatus('authorized');
		});
		return () => unsubscribe();
	}, []);

	return { idToken, authStatus };
};
export default useAuth;
