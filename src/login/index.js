import React from 'react';
import { View,Text } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

const loginStackNvigator = createStackNavigator({
    // SignIn :
    // SignUp :
},{
    initialRouteName: "SignIn",
});

const LoginNavigation = createAppContainer(loginStackNvigator);

export default class Login extends React.Component{
    render(){
        return(
           <LoginNavigation/> 
        )
    }
}