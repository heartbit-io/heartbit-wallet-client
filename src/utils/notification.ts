import notifee from '@notifee/react-native';

export const onMessageReceived = (message: any) => {
	notifee.displayNotification({
		title: message.notification.title,
		body: message.notification.body,
		android: {
			channelId: 'default',
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
};
