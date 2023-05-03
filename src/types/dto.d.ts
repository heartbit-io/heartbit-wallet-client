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
	replies: ReplyResponse[];
}

interface ReplyResponse {
	replyType: 'Doctor' | 'AI' | undefiend;
	name: string;
	classfication: string;
	reply: string;
	createdAt: string;
}
