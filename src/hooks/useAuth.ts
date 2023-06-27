import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { useAppDispatch } from './hooks';

// store
import { getUserData } from 'store/slices/userSlice';

// apis
import { api, apiLND } from 'apis';

const useAuth = () => {
	const dispatch = useAppDispatch();
	const [authStatus, setAuthStatus] = useState<string>('loading');

	useEffect(() => {
		const interval = setInterval(
			() => auth().currentUser?.getIdToken(true),
			1000 * 60 * 59,
		);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const unsubscribe = auth().onIdTokenChanged(async user => {
			if (!user) {
				setAuthStatus('unauthorized');
				return;
			}
			const token = await user.getIdToken();
			api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			if (user.email) {
				dispatch(getUserData(user.email));
				setAuthStatus('authorized');
			}
		});
		return () => unsubscribe();
	}, []);

	return { authStatus };
};
export default useAuth;
