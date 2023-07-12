import { api } from 'apis';

export const postUser = async (
	email: string,
	fcmToken: string,
): Promise<ResponseDto<UserResponse>> => {
	try {
		const response = await api.post('users', {
			pubkey: email,
			email: email,
			role: 'user',
			btcBalance: 0,
			fcmToken: fcmToken,
		});

		return response.data;
	} catch (err: any) {
		return err.response.data;
	}
};

export const getUser = async (
	email: string,
): Promise<ResponseDto<UserResponse>> => {
	try {
		const response = await api.get(`users/${email}`);
		return response.data;
	} catch (err: any) {
		return err.response.data;
	}
};

export const updateUserFcmToken = async (
	fcmToken: string,
): Promise<ResponseDto<UserResponse>> => {
	try {
		const response = await api.patch(`users/fcmtoken`, {
			fcmToken: fcmToken,
		});
		return response.data;
	} catch (err: any) {
		return err.response.data;
	}
};
