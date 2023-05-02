import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

// components
import Layout from 'routes';

// store
import { store } from 'store';

// utils
import 'utils/initializeDefaultProps';

function App(): JSX.Element {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<Provider store={store}>
			<Layout />
			<StatusBar backgroundColor={'#000'} />
		</Provider>
	);
}

export default App;
