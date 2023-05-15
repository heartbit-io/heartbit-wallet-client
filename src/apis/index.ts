import axios from 'axios';
import { API_URL } from '@env';
import { LND_API_URL } from '@env';

console.log(LND_API_URL);

export const api = axios.create({
	baseURL: API_URL,
});

export const apiLND = axios.create({
	baseURL: LND_API_URL,
});
