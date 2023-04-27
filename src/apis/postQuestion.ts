import { API_URL } from '@env';

export const postQuestion = async (
	userEmail: string,
	askContent: string,
	bounty: number,
): Promise<ResponseDto> => {
	try {
		const path = 'questions';
		const response = await fetch(API_URL + path, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user_email: userEmail,
				content: askContent,
				bounty_amount: bounty,
			}),
		});
		const responseDto = await response.json();
		return responseDto;
	} catch (err: any) {
		return err;
	}
};
