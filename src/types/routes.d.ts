type RootStackType = {
	SplashScreen: undefined;
	EmailSignUp: undefined;
	EmailSent: {email: string};
	BottomTabs: undefined;
	Ask: undefined;
	Bounty: { askContent: string };
	Forum: { questionId?: string; askContent?: string };
};

type BottomTabTypes = {
	Home: undefined;
	Wallet: undefined;
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
	Forum: { questionId?: number; askContent?: string };
};
