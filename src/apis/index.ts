import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://dev-wallet-api.heartbit.io/api/v1/',
	timeout: 1000,
});
