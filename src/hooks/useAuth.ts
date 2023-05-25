import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { useAppDispatch } from './hooks';

// store
import { getUserData } from 'store/slices/userSlice';

const useAuth = () => {
	const dispatch = useAppDispatch();
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
			console.log('REFRESHED TOKEN>>>>', token);
			onIdTokenChange(token);
			if (user.email) {
				dispatch(getUserData(user.email));
				setAuthStatus('authorized');
			}
		});
		return () => unsubscribe();
	}, []);

	return { idToken, authStatus };
};
export default useAuth;
