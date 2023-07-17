interface ResponseDto<T> {
	success: boolean;
	statusCode: number;
	message: string;
	data?: T;
}

interface UserResponse {
	id: number;
	pubkey: string;
	role: string;
	email: string;
	btcBalance: number;
	promotionBtcBalance: number;
	airTableRecordId: any;
	fcmToken: string;
	createdAt: string;
	updatedAt: string;
	deletedAt: string;
}

interface CreateQuestionProps {
	bountyAmount: number;
	type: string;
	content: string;
	currentMedication: string;
	ageSexEthnicity: string;
	pastIllnessHistory: string;
	lifestyle: string;
	specificQuestion: string;
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
	questions: QuestionResponse[];
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
	pastIllnessHistory: string;
	rawContent: string;
	rawContentLanguage: string;
	status: string;
	type: string;
	updatedAt: string;
	userId: number;
	lifestyle: string;
	specificQuestion: string;
}

interface ReplyResponse {
	replyType: 'doctor' | 'ai' | string;
	assessment: string;
	classification: string;
	content: string;
	createdAt: string;
	currentMedications: string;
	deletedAt: string;
	doctorNote: string;
	id: number;
	majorComplaint: string;
	medicalHistory: string;
	name: string;
	plan: string;
	questionId: number;
	reply: string;
	status: string;
	title: string;
	triage: string;
	updatedAt: string;
	userId: number;
}

interface ExchangeRateResponse {
	'1000': number;
	'10000': number;
	customSatoshi: number;
}
