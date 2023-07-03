import { api } from 'apis';

export const getTransactions = async (
	pubkey: string,
	limit: number,
	offset: number,
	order?: 'ASC' | 'DESC',
) => {
	try {
		const query: string = `?limit=${limit}&offset=${offset}${
			order === undefined ? '' : order
		}`;

		const response = await api.get(`transactions/${pubkey}${query}`);

		return response.data;
	} catch (err: any) {
		return err.response.data.message;
	}
};
