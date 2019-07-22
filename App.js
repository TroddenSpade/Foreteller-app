import React from 'react';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux';

import Store from './src/redux/Store'
import Main from './src/Main.js';
import Login from './src/login';

const mainSwitchNavigator = createSwitchNavigator({
  Main: Main,
  Login: Login,
},{
  initialRouteName : "Main"
});

const Navigation = createAppContainer(mainSwitchNavigator);

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation/>
    </Provider>
  );
}