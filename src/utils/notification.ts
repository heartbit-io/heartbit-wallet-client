import notifee from '@notifee/react-native';

export const onMessageReceived = (message: any) => {
	notifee.displayNotification({
		title: message.notification.title,
		body: message.notification.body,
		android: {
			channelId: 'default',
			smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
			// pressAction is needed if you want the notification to open the app when pressed
			pressAction: {
				id: 'default',
			},
		},
	});
};
