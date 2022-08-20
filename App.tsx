import React from 'react';
import Navigator from './src';
import {Provider} from 'react-redux';
import state from './src/state';

const App = () => (
  <Provider store={state}>
    <Navigator />
  </Provider>
);

export default App;
