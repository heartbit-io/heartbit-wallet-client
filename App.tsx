import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import RootApp from './src/RootApp';
import SplashScreen from 'react-native-splash-screen';
import {store} from './src/stores/store';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}

export default App;
