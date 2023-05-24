import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ActivityIndicatorProvider } from 'contexts';

// components
import Layout from 'routes';

// store
import { store } from 'store';

// utils
import 'utils/initializeDefaultProps';

function App(): JSX.Element {
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
