import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Dimensions } from "react-native";
import {SafeAreaView } from 'react-navigation';
import { Entypo, AntDesign } from "@expo/vector-icons";


export default class TabBar extends React.Component {
  state = {
    color: 1
  };

  colors = [
    ["#225377", "#225377", "#79CB52"],
    ["#225377", "#79CB52", "#225377"],
    ["#79CB52", "#225377", "#225377"]
  ];

  createButton = (route, routeIndex) => {
    const isRouteActive =
      routeIndex === this.props.navigation.state.index;
    const tintColor = isRouteActive
      ? this.props.activeTintColor
      : this.props.inactiveTintColor;
    return (
      <TouchableOpacity
        key={routeIndex}
        onPress={() => {
          this.setState({ color: routeIndex });
          this.props.onTabPress({ route });
        }}
      >
        {this.props.renderIcon({
          route,
          focused: isRouteActive,
          tintColor
        })}
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={styles.container}
      >
        <View style={styles.cover}>
        {this.createButton(this.props.navigation.state.routes[0],0)}
        {this.createButton(this.props.navigation.state.routes[1],1)}
          <View style={styles.blank}/>
            
          <TouchableOpacity
            style={styles.plus}
            onPress={() => {
              this.props.navigation.navigate('CreatePoll')
            }}
          >
            <AntDesign name="pluscircle" color={"grey"} size={50} />
          </TouchableOpacity>
          
          {this.createButton(this.props.navigation.state.routes[2],2)}
          {this.createButton(this.props.navigation.state.routes[3],3)}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 38,
    width: "100%",
    justifyContent: "flex-end",
    borderTopWidth:1,
    borderTopColor:"lightgrey"
  },
  cover: {
    backgroundColor: "white",
    height: 38,
    width: "100%",
    flex:1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  plus:{
    position:'absolute',
    justifyContent:"center",
    alignItems: "center",
    width:50,
    left:Dimensions.get('window').width/2 - 25,
  },
  blank:{
    width:50,
    height:50,
  }
});
