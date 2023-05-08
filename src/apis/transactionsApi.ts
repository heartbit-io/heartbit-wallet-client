import { api } from 'apis';

export const getTransactions = async (pubkey: string) => {
	try {
		const response = await api.get(`transactions/${pubkey}`);
		return response.data;
	} catch (err: any) {
		return err;
	}
};
