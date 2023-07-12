import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'store';

// apis
import { getUser, updateUserFcmToken } from 'apis/userApi';

import messaging from '@react-native-firebase/messaging';

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
	async dispatch => {
		try {
			if (email) {
				const user: ResponseDto<UserResponse> = await getUser(email);
				if (user.statusCode !== 200 || !user?.success) {
					return false;
				} else if (user?.data?.fcmToken) {
					dispatch(setUserData(user.data));
					return true;
				} else {
					const fcmToken = await messaging().getToken();
					const updatedUser: ResponseDto<UserResponse> =
						await updateUserFcmToken(fcmToken);
					if (updatedUser.statusCode !== 200 || !updatedUser.success) {
						return false;
					} else {
						dispatch(updateUserData(updatedUser.data));
						return true;
					}
				}
			} else {
				return false;
			}
		} catch (err) {
			console.log('>>>>>>', err);
			return false;
		}
	};
