type RootStackType = {
	SplashScreen: undefined;
	EmailSignUp: undefined;
	EmailSent: { email: string };
	DrawerTabs: undefined;
	Ask: undefined;
	Bounty: { askContent: string };
	Forum: {
		questionId: number;
		bountyAmount: number;
		askContent: string;
		createdAt?: string;
	};
	MyQuestions: undefined;
	Transactions: undefined
};

type BottomTabTypes = {
	Home: undefined;
	Wallet: undefined;
};

type DrawerTabTypes = {
	BottomTabs: undefined;
};

type WelcomeNavigatorParamList = {
	EmailSignUp: undefined;
	Tab: undefined;
};

type HomeNavigatorParamList = {
	Home: undefined;
	Ask: undefined;
	Bounty: { askContent: string };
	/* 
		When navigate to Forum right after post question, 
		don't need to fetch userQuestion api which causes latency
	*/
	Forum: {
		questionId: number;
		bountyAmount: number;
		askContent: string;
		createdAt?: string;
	};
};
