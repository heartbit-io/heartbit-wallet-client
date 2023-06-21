import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ActivityIndicatorProvider } from 'contexts';
import Intercom from '@intercom/intercom-react-native';

// components
import Layout from 'routes';

// store
import { store } from 'store';

// utils
import 'utils/initializeDefaultProps';

function App(): JSX.Element {
	useEffect(() => {
		Intercom.setLauncherVisibility('VISIBLE');
		Intercom.setBottomPadding(50);
	});
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
