import React from 'react';
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import { Entypo, Foundation, FontAwesome } from "@expo/vector-icons";

import TabBar from './TabBar';
import Home from './Home';
import CreatePoll from './CreatePoll';
import LeaderBoard from './LeaderBoard';
import Profile from './Profile';
import Search from './Search';

const BottomTabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
            <Entypo name="home" color={tintColor} size={25} />
            )
        })
    },

    Search: {
        screen: Search,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="search" color={tintColor} size={25} />
            )
        })
    },

    LeaderBoard: {
        screen: LeaderBoard,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
            <Foundation name="results-demographics" color={tintColor} size={35} />
            )
        })
    },

    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="user" color={tintColor} size={25} />
            )
        })
    }
},{
    initialRouteName: "Home",
    tabBarOptions: {
        showLabel: false,
        activeTintColor: "#000000",
        inactiveTintColor: "#cecece"
    },
    tabBarComponent: props => <TabBar {...props} />
});

export default createStackNavigator({
    BottomTabNavigator: {
        screen: BottomTabNavigator,
        navigationOptions: {
            header: null,
        }
    },
    CreatePoll: {
        screen: CreatePoll
    },
},{
    initialRouteName: "BottomTabNavigator",
});