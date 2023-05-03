import { api } from 'apis';

export const postQuestion = async (
	askContent: string,
	bounty: number,
): Promise<ResponseDto<CreateQuestionResponse>> => {
	try {
		const url = 'questions';

		const response = await api.post(url, {
			content: askContent,
			bountyAmount: bounty,
		});

		const responseDto = await response.data;

		return responseDto as ResponseDto<CreateQuestionResponse>;
	} catch (err: any) {
		return err;
	}
};
