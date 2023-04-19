import * as React from 'react';
import {Provider} from 'react-redux';
import ApplicationNavigator from './navigators/ApplicationNavigator';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
}
