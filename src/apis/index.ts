import axios from 'axios';
import { API_URL, LND_API_URL } from '@env';

export const api = axios.create({
	baseURL: API_URL,
});

export const apiLND = axios.create({
	baseURL: LND_API_URL,
});
