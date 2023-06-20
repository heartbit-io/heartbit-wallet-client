import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'store';

// apis
import { getUser } from 'apis/userApi';

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
				const res: any = await getUser(email);
				if (res.statusCode === 200 && res?.success) {
					dispatch(setUserData(res.data));
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		} catch (err) {
			console.log('>>>>>>', err);
			return false;
		}
	};
