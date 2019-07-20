import React from 'react';
import { ActivityIndicator,View,StyleSheet } from 'react-native';

export default Loading = ()=>{
    return(
        <View style={Styles.loading}>
            <ActivityIndicator size="large" color={["#cecece"]}/>
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