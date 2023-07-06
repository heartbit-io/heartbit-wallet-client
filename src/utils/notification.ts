import notifee from '@notifee/react-native';

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
	} catch (err) {
		console.log(err);
	}
};
