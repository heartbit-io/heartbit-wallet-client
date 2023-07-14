import notifee from '@notifee/react-native';

// store
import { store } from 'store';
import { fetchQuestionsList } from 'store/slices/questionsSlice';
import { getTransactionsList } from 'store/slices/transactionsSlice';
import { getUserData } from 'store/slices/userSlice';

export const onMessageReceived = async (message: any) => {
	try {
		const channelId = await notifee.createChannel({
			id: 'default',
			name: 'Default Channel',
		});

		await notifee.displayNotification({
			title: `<body style="font-size: 16px; font-weight: 500;">${message.notification.title}</body>`,
			body: message.notification.body,
			android: {
				channelId,
				smallIcon: 'ic_small_icon', // optional, defaults to 'ic_launcher'.
				color: '#F68F2A',
				// pressAction is needed if you want the notification to open the app when pressed
				pressAction: {
					id: 'default',
				},
			},
			ios: {
				foregroundPresentationOptions: {
					badge: true,
					sound: true,
					banner: true,
					list: true,
				},
			},
		});

		const notiType = message.data.type;

		await _stateHandler(notiType);
	} catch (err) {
		console.log(err);
	}
};

export const onMessageReceivedBackground = async (message: any) => {
	try {
		const notiType = message?.data?.type as string;

		await _stateHandler(notiType);
	} catch (err) {
		console.log(err);
	}
};

const _stateHandler = async (notiType: string) => {
	if (notiType === 'TRANSACTION') {
		// update user balance and transactions in redux
		const email: string = store.getState().user.userData.email;
		store.dispatch(getUserData(email));
		store.dispatch(getTransactionsList(true));
	} else if (notiType === 'DOCTOR_ANSWER') {
		// update user questions
		store.dispatch(fetchQuestionsList(true));
	}
};
