import React from 'react';

import {getToken} from './utils/misc'
import Loading from './components/Loading';

export default class Main extends React.Component{
    componentWillMount(){
        getToken(
            (res)=>{
                if(res[0][0] && res[0][1])
                    this.props.navigation.navigate('Main')
                else
                    this.props.navigation.navigate('Login')
            },
            ()=>this.props.navigation.navigate('Login')
        )
    }
    render(){
        return(
            <Loading/>
        )
    }
}