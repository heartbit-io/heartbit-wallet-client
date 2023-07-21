import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'store';
import messaging from '@react-native-firebase/messaging';

// apis
import { getUser, updateUserFcmToken } from 'apis/userApi';
import { fetchLatestBtcRate } from './coinSlice';

interface UserSlice {
	userData: any;

	loading: boolean;
	error: string;
}

const initialState: UserSlice = {
	userData: null,
	loading: false,
	error: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action) => ({
			...state,
			userData: action.payload,
		}),
		updateUserData: (state, action) => ({
			...state,
			userData: {
				...state.userData,
				...action.payload,
			},
		}),
		setLoading: (state, action) => ({
			...state,
			loading: action.payload,
		}),
		setError: (state, action) => ({
			...state,
			error: action.payload,
		}),
		resetUserData: () => ({
			...initialState,
		}),
	},
});

export const {
	setUserData,
	updateUserData,
	setLoading,
	setError,
	resetUserData,
} = userSlice.actions;
export default userSlice.reducer;

export const getUserData =
	(email: string): AppThunk =>
	async (dispatch, getState) => {
		const { loading } = getState().user;

		if (email && !loading) {
			dispatch(setLoading(true));
			getUser(email)
				.then(async (user: ResponseDto<UserResponse>) => {
					if (user.statusCode === 200 && user.success) {
						if (user.data?.fcmToken) {
							dispatch(setUserData(user.data));
							dispatch(fetchLatestBtcRate());
						} else {
							const fcmToken = await messaging().getToken();
							updateUserFcmToken(fcmToken).then(
								(updatedUser: ResponseDto<UserResponse>) => {
									if (updatedUser.statusCode === 200 && updatedUser.success) {
										const fcmToken = updatedUser.data?.fcmToken as string;
										dispatch(setUserData({ ...user.data, fcmToken: fcmToken }));
										dispatch(fetchLatestBtcRate());
									} else {
										console.log('Update User Data Error', updatedUser);
									}
								},
							);
						}
					} else {
						console.log('Fetch User Data Error', user);
					}
				})
				.catch(err => console.log('Fetch User Data Error', err))
				.finally(() => dispatch(setLoading(false)));
		} else {
			console.log('EMAIL IS NOT EXIST');
		}
	};
