interface ResponseDto<T> {
	success: boolean;
	statusCode: number;
	message: string;
	data?: T;
}

interface CreateQuestionResponse {
	id: number;
	status: string;
	content: string;
	bountyAmount: number;
	updatedAt: string;
	createdAt: string;
}

interface GetQuestionResponse {
	hasMore: boolean;
	questions: QuestionResponse[]
}

interface QuestionResponse {
	id: number;
	userId: number;
	content: string;
	bountyAmount: number;
	status: string;
	updatedAt: string;
	createdAt: string;
}

interface ReplyResponse {
	replyType: 'Doctor' | 'ai' | undefiend;
	name: string;
	classification: string;
	reply: string;
	createdAt: string;
}

interface ExchangeRateResponse {
	'1000': number;
	'10000': number;
	customSatoshi: number;
}
