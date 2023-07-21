import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ActivityIndicatorProvider } from 'contexts';
import Intercom from '@intercom/intercom-react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';

// components
import Layout from 'routes';

// store
import { store } from 'store';

// utils
import 'utils/initializeDefaultProps';
import { onMessageReceived } from 'utils/notification';

function App(): JSX.Element {
	useEffect(() => {
		Intercom.setLauncherVisibility('VISIBLE');
		Intercom.setBottomPadding(40);

		notifee.requestPermission();
		messaging().onMessage(onMessageReceived);
		checkInitialNotification();
		return notifee.onForegroundEvent(({ type, detail }) => {
			switch (type) {
				case EventType.DISMISSED:
					console.log('User dismissed notification', detail.notification);
					break;
				case EventType.PRESS:
					console.log('User pressed notification', detail.notification);
					break;
			}
		});
	}, []);

	const checkInitialNotification = () => {
		notifee
			.getInitialNotification()
			.then(initialNotification => {
				if (initialNotification) {
					console.log(
						'Notification caused application to open',
						initialNotification.notification,
					);
					console.log(
						'Press action used to open the app',
						initialNotification.pressAction,
					);
				}
			})
			.catch(err => console.log('GET INITIAL NOTIFICATION ERROR>>>', err));
	};

	return (
		<Provider store={store}>
			<ActivityIndicatorProvider>
				<Layout />
				<StatusBar backgroundColor={'#000'} />
			</ActivityIndicatorProvider>
		</Provider>
	);
}

export default App;
