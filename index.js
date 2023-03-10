/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Providers from '~/Providers';

const AppRoot = () => (
  <Providers>
    <App />
  </Providers>
);

AppRegistry.registerComponent(appName, () => AppRoot);
