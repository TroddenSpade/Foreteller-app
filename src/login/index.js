import React from 'react';
import { View,Text } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import SignUp from './SignUp.js';
import SignIn from './SignIn.js';

const loginStackNavigator = createStackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
          header: null,
        }
      },
    SignUp: SignUp,
},{
    initialRouteName: "SignIn",
});

export default loginStackNavigator;