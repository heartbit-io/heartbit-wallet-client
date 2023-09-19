import axios from 'axios';
import { API_URL, LND_API_URL, LND_API_KEY, API_KEY } from '@env';

export const api = axios.create({
	baseURL: API_URL,
	headers: {
		apiKey: API_KEY,
		contentType: 'application/json;charset=UTF-8',
	},
});

export const apiLND = axios.create({
	baseURL: LND_API_URL,
	headers: {
		apiKey: LND_API_KEY,
	},
});
