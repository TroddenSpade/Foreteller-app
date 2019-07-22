import React from "react";
import {
  View,
  Text,
  Switch,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signUp } from '../redux/actions/Login'

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    username:"",
    autoSignIn: false,
  };

  changeUserHandler = username => {
    this.setState({
      username
    });
  };

  changeEmailHandler = email => {
    this.setState({
      email
    });
  };

  changePassHandler = password => {
    this.setState({
      password
    });
  };

  changeConfirmHandler = confirmPassword => {
    this.setState({
      confirmPassword
    });
  };

  signup = () => {
    if (this.state.email.length == 0 || 
        this.state.username.length == 0 || 
        this.state.password.length == 0) {
          console.log("empty field")
    } else {
      if (this.state.password != this.state.confirmPassword) {
        console.log("pass not match")        
      } else {
        if (this.state.password.length < 6 || this.state.password.length > 20) {
          console.log("pass length")
        } else {
          const data = {
            email: this.state.email.trim().toLowerCase(),
            password: this.state.password,
            username: this.state.username.trim().toLowerCase(),
          };
          console.log(data);
          this.props.signUp(data,()=>{
            this.props.navigation.goBack();
          });
        }
      }
    }
  };

  render() {
    return (
        <View style={Styles.container}>
            <KeyboardAvoidingView behavior="padding" enabled>
                <View style={Styles.block}>
                    <TextInput
                    style={Styles.input}
                    placeholder="email"
                    onChangeText={this.changeEmailHandler}
                    />
                </View>

                <View style={Styles.block}>
                    <TextInput
                    style={Styles.input}
                    placeholder="username"
                    onChangeText={this.changeUserHandler}
                    />
                </View>

                <View style={Styles.block}>
                    <TextInput
                    style={Styles.input}
                    placeholder="Password"
                    onChangeText={this.changePassHandler}
                    secureTextEntry
                    />
                </View>

                <View style={Styles.block}>
                    <TextInput
                    style={Styles.input}
                    placeholder="Confirm Password"
                    onChangeText={this.changeConfirmHandler}
                    secureTextEntry
                    />
                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity style={Styles.signUpButton} onPress={this.signup}>
                <Text
                    style={{
                    fontSize: 30,
                    color: "white"
                    }}
                >
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProsp = dispatch => {
  return bindActionCreators({ signUp }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp
)(SignUp);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 5,
    paddingLeft: 4,
    width: 300,
    height: 40,
    backgroundColor: "white"
  },
  block: {
    margin: 10
  },
  checkBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  signUpButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "grey",
    width: 300,
    height: 50,
    marginBottom: 10,
    marginTop: 20
  }
});
