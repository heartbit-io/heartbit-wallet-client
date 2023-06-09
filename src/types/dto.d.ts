interface ResponseDto<T> {
	success: boolean;
	statusCode: number;
	message: string;
	data?: T;
}

interface CreateQuestionProps {
	bountyAmount: number;
	type: string;
	content: string;
	currentMedication: string;
	ageSexEthnicity: string;
	pastIllnessHistory: string;
	others: string;
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
	ageSexEthnicity: string;
	bountyAmount: number;
	content: string;
	createdAt: string;
	currentMedication: string;
	deletedAt: string;
	id: number;
	others: string;
	pastIllnessHistory:string;
	rawContent:string;
	rawContentLanguage:string;
	status:string;
	type:string;
	updatedAt:string;
	userId: number;
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
