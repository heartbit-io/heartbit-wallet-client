import { api } from 'apis';

const url = 'questions';

export const postQuestion = async (
	askContent: string,
	bounty: number,
): Promise<ResponseDto<CreateQuestionResponse>> => {
	try {
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

export const deleteQuestion = async (
	questionId: number,
): Promise<ResponseDto<any>> => {
	try {
		const response = await api.delete(url + `/${questionId}`);

		const responseDto = await response.data;

		return responseDto as ResponseDto<any>;
	} catch (err: any) {
		return err;
	}
};

export const getQuestionList = async (
	limit: number,
	offset: number,
	order?: 'ASC' | 'DESC',
): Promise<ResponseDto<GetQuestionResponse>> => {
	try {
		const query: string = `?limit=${limit}&offset=${offset}${
			order === undefined ? '' : order
		}`;

		const response = await api.get(url + query);

		const responseDto = await response.data;

		return responseDto as ResponseDto<GetQuestionResponse>;
	} catch (err: any) {
		return err;
	}
};

export const postGPTReply = async (
	questionId: number,
): Promise<ResponseDto<ReplyResponse>> => {
	try {
		const gptPath = '/chat-gpt-replies';

		const response = await api.post(url + gptPath, {
			questionId,
		});

		const responseDto = await response.data;

		return responseDto as ResponseDto<ReplyResponse>;
	} catch (err: any) {
		return err;
	}
};

export const getReply = async (
	questionId: number,
): Promise<ResponseDto<ReplyResponse>> => {
	try {
		const replyPath = `/${questionId}/replies`;

		const response = await api.get(url + replyPath);

		const responseDto = await response.data;

		return responseDto as ResponseDto<ReplyResponse>;
	} catch (err: any) {
		return err;
	}
};
