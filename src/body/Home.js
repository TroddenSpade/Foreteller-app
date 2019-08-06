import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl,
    FlatList,
    SafeAreaView,
    TouchableOpacity 
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPolls } from '../redux/actions/Poll';
import Loading from '../components/Loading';

class Home extends React.Component{
    state={
        loading:true,
        refreshing:false,
    }

    componentDidMount(){
        this.props.getPolls();
        console.log("one get")
    }

    options = (poll)=>{
        if(poll.noOptions == 2){
            return(
                <View style={styles.columnOption}>
                    <View style={styles.rowOption}>
                        <TouchableOpacity style={styles.option}
                            onPress={()=>alert("one")}
                        >
                            <Text>{poll.options["1"]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}
                            onPress={()=>alert("two")}
                        >
                            <Text>{poll.options["2"]}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }else if(poll.noOptions == 3){
            return(
                <View style={styles.columnOption}>
                    <View style={styles.rowOption}>
                        <TouchableOpacity style={styles.option}
                            onPress={()=>alert("one")}
                        >
                            <Text>{poll.options["1"]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}
                            onPress={()=>alert("two")}
                        >
                            <Text>{poll.options["2"]}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowOption}>
                        <TouchableOpacity style={styles.optionBottom}
                            onPress={()=>alert("three")}
                        >
                            <Text>{poll.options["3"]}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }else{
            return(
                <View style={styles.columnOption}>
                    <View style={styles.rowOption}>
                        <TouchableOpacity style={styles.option}
                            onPress={()=>alert("one")}
                        >
                            <Text>{poll.options["1"]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}
                            onPress={()=>alert("two")}
                        >
                            <Text>{poll.options["2"]}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowOption}>
                        <TouchableOpacity style={styles.option}
                            onPress={()=>alert("three")}
                        >
                            <Text>{poll.options["3"]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}
                            onPress={()=>alert("four")}
                        >
                            <Text>{poll.options["4"]}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }

    render(){
        return(
            <SafeAreaView style={styles.container}> 
            {   
                this.props.polls.length == 0 ? 
                <Loading/> 
                : 
                <FlatList
                    contentContainerStyle={styles.scrollView}
                    data={this.props.polls}
                    renderItem={({item,index}) =>(
                        <View key={index} style={styles.poll}>
                            <View style={styles.subject}>
                                <Text>{item.subject}</Text>
                            </View>
                            {this.options(item)}
                        </View>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={()=>console.log("reafresh")}
                        />
                    }
                    onEndReachedThreshold={0}
                    onEndReached={({distanceFromEnd})=>{
                        console.log(distanceFromEnd)
                        this.props.getPolls(this.props.last)
                    }}
                />
            }
            </SafeAreaView>
        )
    }
}

mapStateToProps = (state)=>{
    return{
        polls:state.Poll.polls,
        last:state.Poll.last,
    }
}

mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({getPolls},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    scrollView:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
    },
    poll:{
        width:'90%',
        borderColor:'grey',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        borderWidth:1,
        margin:5,
        padding:5,
        borderRadius:10,
    },
    rowOption:{
        height:30,
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'red',
        margin:2,
    },
    columnOption:{
        width:'100%',
        flexDirection:'column',
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
    },
    option:{
        justifyContent:'center',
        alignItems:'center',
        width:'40%',
        backgroundColor:'yellow',
        margin:1,
    },
    optionBottom:{
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        backgroundColor:'yellow',
    }
});