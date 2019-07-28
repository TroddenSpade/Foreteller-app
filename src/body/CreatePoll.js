import React from 'react';
import { View,Text,TouchableOpacity,Platform } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-navigation';

export default class CreatePoll extends React.Component{
    static navigationOptions = ({ navigation })=>{
            
    };
    
    render(){
        return(
            <View>
                <Text>CreateCard</Text>
            </View>
        )
    }
}