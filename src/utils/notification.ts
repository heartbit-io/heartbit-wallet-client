import notifee from '@notifee/react-native';
import { getTransactions } from 'apis/transactionsApi';
import { getUser } from 'apis/userApi';
import { store } from 'store';
import { setOffset, setTransactions } from 'store/slices/transactionsSlice';
import { setUserData, updateUserData } from 'store/slices/userSlice';

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
		// update user balance and transactions in redux
		const email = store.getState().user.userData.email;
		const userResponse = await getUser(email);
		const txListResponse = await getTransactions(email, 50, 0);
		userResponse.statusCode === 200
			? store.dispatch(
					updateUserData({ btcBalance: userResponse.data.btcBalance }),
			  )
			: console.log(userResponse);
		console.log(txListResponse);
		txListResponse.statusCode === 200
			? store.dispatch(setTransactions(txListResponse.data.transactions))
			: console.log(txListResponse);
	} catch (err) {
		console.log(err);
	}
};
