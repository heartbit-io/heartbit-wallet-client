import { api } from 'apis';

const url: string = 'doctors';

export const authDoctor = async () => {
	try {
		const path: string = '/login';
		const response = await api.get(url + path);

		return response.data;
	} catch (err: any) {
		return err.response.data;
	}
};
