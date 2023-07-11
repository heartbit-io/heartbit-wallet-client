import { api } from 'apis';

export const postUser = async (email: string, fcmToken: string) => {
	try {
		const response = await api.post('users', {
			pubkey: email,
			email: email,
			role: 'user',
			btcBalance: 0,
			fcm_token: fcmToken,
		});

		return response.data;
	} catch (err: any) {
		return err.response.data;
	}
};

export const getUser = async (email: string) => {
	try {
		const response = await api.get(`users/${email}`);
		return response.data;
	} catch (err: any) {
		return err.response.data;
	}
};
