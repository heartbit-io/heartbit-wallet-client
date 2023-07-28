/**
 * @format
 */
import './global.js';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'utils/initializeDefaultProps';

AppRegistry.registerComponent(appName, () => App);
