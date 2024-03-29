import { apiLND } from 'apis';

const url = 'lnd';

export const getDepositRequest = async (
	email: string,
	amount: number,
): Promise<ResponseDto<string>> => {
	try {
		const path: string = '/deposits/';
		const query: string = `?email=${email}&amount=${amount}`;
		const response = await apiLND.get(url + path + query);
		const responseDto = await response.data;

		return responseDto as ResponseDto<string>;
	} catch (err: any) {
		return err.response.data;
	}
};

export const getWithdrawalRequest = async (
	email: string,
	amount: number,
): Promise<ResponseDto<string>> => {
	try {
		const path: string = '/withdrawals/';
		const query: string = `?email=${email}&amount=${amount}`;
		const response = await apiLND.get(url + path + query);
		const responseDto = await response.data;

		return responseDto as ResponseDto<string>;
	} catch (err: any) {
		return err.response.data;
	}
};
