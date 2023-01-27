import {Provider} from 'react-redux';
import React from 'react';
import RootApp from './src/RootApp';
import {store} from './src/stores/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}

export default App;
