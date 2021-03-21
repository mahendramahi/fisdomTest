import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import config from './app/config';
import {RootNavigation} from './app/navigations';

const App = () => {
  return (
    <Provider store={config.store}>
      <PersistGate loading={null} persistor={config.persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
