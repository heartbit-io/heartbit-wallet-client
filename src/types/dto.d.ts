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
	id: number;
	userId: string;
	content: string;
	bountyAmount: number;
	status: string;
	updatedAt: string;
	createdAt: string;
	deletedAt: string;
	replies: ReplyResponse[];
}

interface ReplyResponse {
	replyType: 'Doctor' | 'ai' | undefiend;
	name: string;
	classification: string;
	reply: string;
	createdAt: string;
}
