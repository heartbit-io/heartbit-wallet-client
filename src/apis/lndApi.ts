import { api } from 'apis';
import { LND_API_URL } from '@env';

const url = 'lnd';

export const getDepositRequest = async (
	email: string,
	amount: number,
): Promise<ResponseDto<string>> => {
	try {
		const path: string = '/deposits/';
		const query: string = `?email=${email}&amount=${amount}`;

		const response = await api({
			method: 'GET',
			url: url + path + query,
			baseURL: LND_API_URL,
		});

		const responseDto = await response.data;

		return responseDto as ResponseDto<string>;
	} catch (err: any) {
		return err;
	}
};

export const getWithdrawalRequest = async (
	email: string,
	amount: number,
): Promise<ResponseDto<string>> => {
	try {
		const path: string = '/withdrawals/';
		const query: string = `?email=${email}&amount=${amount}`;

		const response = await api({
			method: 'GET',
			url: url + path + query,
			baseURL: LND_API_URL,
		});

		const responseDto = await response.data;

		return responseDto as ResponseDto<string>;
	} catch (err: any) {
		return err;
	}
};
