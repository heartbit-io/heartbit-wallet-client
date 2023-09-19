import { Platform } from 'react-native';

export const OS = Platform.OS;

export const validateEmail = (email: string) => {
	try {
		return email
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			);
	} catch (err) {
		console.log('VALIDATE EMAIL ERR', err);
		return false;
	}
};
