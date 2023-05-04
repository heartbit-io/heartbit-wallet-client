import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

// components
import Layout from 'routes';

// store
import { store } from 'store';

// utils
import 'utils/initializeDefaultProps';

function App(): JSX.Element {
	return (
		<Provider store={store}>
			<Layout />
			<StatusBar backgroundColor={'#000'} />
		</Provider>
	);
}

export default App;
