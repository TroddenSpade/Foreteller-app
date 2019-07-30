import React from 'react';
import { View,Text,TouchableOpacity,TextInput,StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CreatePoll extends React.Component{
    state={
        subject:'',
        noOptions:2,
        point:0,
        options:{
            1:'',
            2: '',
            3:'',
            4:''
        }
    }

    newOptions = ()=>{
        if(this.state.noOptions == 2){
            return(
                <View style={styles.rowOption}>
                    <TouchableOpacity style={styles.optionBottom}
                        onPress={()=>this.setState({
                            noOptions:3
                        })}
                    >
                        <AntDesign name="plus" color={'grey'} size={25} />
                    </TouchableOpacity>
                </View>
            )
        }else if(this.state.noOptions == 3){
            return(
                <View style={styles.rowOption}>
                    <TextInput
                        multiline={true}
                        maxLength={50}
                        placeholder="3"
                        style={styles.optionBottom}
                        onChangeText={subject => this.setState({ subject })}
                    />
                    <TouchableOpacity style={styles.optionBottom}
                        onPress={()=>this.setState({
                            noOptions:4
                        })}
                    >
                        <AntDesign name="plus" color={'grey'} size={25} />
                    </TouchableOpacity>
                </View>
            )
        }else{
            return(
                <View style={styles.rowOption}>
                    <TextInput
                        multiline={true}
                        maxLength={50}
                        placeholder="3"
                        style={styles.optionBottom}
                        onChangeText={subject => this.setState({ subject })}
                    />
                    <TextInput
                        multiline={true}
                        maxLength={50}
                        placeholder="4"
                        style={styles.optionBottom}
                        onChangeText={subject => this.setState({ subject })}
                    />
                </View>
            )
        }
    }

    render(){
        return(
            <View style={styles.container}> 
                <View style={styles.blank}/>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Feather name="chevron-left" color={'grey'} size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.send}  onPress={() =>console.log('send')}>
                        <Text style={styles.text}> Send </Text>
                        <FontAwesome name="send" color={'grey'} size={25} />
                    </TouchableOpacity>
                </View>

                <View style={styles.body}>
                    <View style={styles.subjectBody}>
                        <TextInput
                            multiline={true}
                            maxLength={150}
                            placeholder="What is this Poll about ?!"
                            style={styles.subject}
                            onChangeText={subject => this.setState({ subject })}
                        />
                    </View>
                    
                    <View style={styles.options}>
                        <View style={styles.rowOption}>
                            <TextInput
                                multiline={true}
                                maxLength={50}
                                placeholder="1"
                                style={styles.optionTop}
                                onChangeText={subject => this.setState({ subject })}
                            />
                            <TextInput
                                multiline={true}
                                maxLength={50}
                                placeholder="2"
                                style={styles.optionTop}
                                onChangeText={subject => this.setState({ subject })}
                            />
                        </View>
                            {this.newOptions()}
                    </View>
                </View>
            </View> 
        )
    }

    componentDidMount(){
        this.setState({
            owner:this.props.id,
        });
    }
}


const mapStateToProps = (state)=>{
    return{
        id:state.Login._id
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePoll);

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1
    },
    blank:{
        height:Constants.statusBarHeight,
        backgroundColor: 'white',
    },
    header:{
        flexDirection: "row",
        height:45,
        backgroundColor: 'white',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'lightgrey'
    },
    send:{
        flexDirection: "row",
        alignItems:'center',
        marginRight:10
    },
    text:{
        fontSize:20,
        color:'grey',
        fontWeight: 'bold'
    },
    body:{
        flexDirection:'column',
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    subjectBody:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        height: '30%',
        width: '100%',
    },
    subject:{
        backgroundColor: "white",
        padding: 5,
        textAlignVertical: "top",
        margin: 2,
        height: '60%',
        width: '70%',
        borderLeftWidth:1,
        borderLeftColor:'lightgrey'
    },
    options:{
        backgroundColor:'green',
        justifyContent:'center',
        height:'30%',
        width:'100%'
    },
    optionTop:{
        backgroundColor: "white",
        padding: 5,
        textAlignVertical: "top",
        height: 80,
        marginBottom:10,
        width: '40%',
        borderWidth:1,
        borderColor:'lightgrey',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    optionBottom:{
        backgroundColor: "white",
        padding: 5,
        textAlignVertical: "top",
        height: 80,
        width: '40%',
        borderWidth:1,
        borderColor:'lightgrey',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    rowOption:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
});