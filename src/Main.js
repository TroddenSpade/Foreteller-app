import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getToken, removeToken } from './utils/misc'
import { checkToken } from './redux/actions/Login'
import Loading from './components/Loading';

class Main extends React.Component{
    async componentWillMount(){
        const data = await getToken();
        if(data){
            this.props.checkToken(data);
        }else{
            this.props.navigation.navigate("Login");
        }
    }

    componentWillReceiveProps(props) {
        if (props.Login._id) {
            this.props.navigation.navigate("Body");
        } else {
          this.props.navigation.navigate("Login");
        }
    }

    render(){
        return(
            <Loading/>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        Login:state.Login
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ checkToken }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);