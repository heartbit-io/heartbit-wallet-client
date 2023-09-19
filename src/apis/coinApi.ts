import { api } from 'apis';

const url = 'coin-exchange-rates/btc';

export const getBtcRates = async (
	customSatoshi: number = 1,
): Promise<ResponseDto<ExchangeRateResponse>> => {
	try {
		const query: string = `?satoshi=${customSatoshi}`;

		const response = await api.get(url + query);

		const responseDto = await response.data;

		return responseDto as ResponseDto<ExchangeRateResponse>;
	} catch (err: any) {
		return err.response.data;
	}
};
