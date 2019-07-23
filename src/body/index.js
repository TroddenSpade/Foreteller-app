import React from 'react';
import { ActivityIndicator,View,StyleSheet } from 'react-native';

export default Body = ()=>{
    return(
        <View style={Styles.loading}>
            <ActivityIndicator size="large" color={["#00ff00"]}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    loading:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
    }
});