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

import { signIn } from '../redux/actions/Login';

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    autoSignIn: false,
  };

  changeUserHandler = email => {
    this.setState({
      email
    });
  };

  changePassHandler = password => {
    this.setState({
      password
    });
  };

  signin = () => {
    if (this.state.email.length == 0 || this.state.password.length == 0) {
      console.log("please fill the blanks")
    } else {
      if (this.state.password.length < 6 || this.state.password.length > 20) {
      console.log("pass length not valid")        
      } else {
        const data = {
          email: this.state.email.trim().toLowerCase(),
          password: this.state.password
        };
        this.props.signIn(data);
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
        </KeyboardAvoidingView>

        <View style={Styles.bottomBar}>
          <View style={Styles.checkBox}>
            <Switch
              value={this.state.autoSignIn}
              style={{
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 5
              }}
              onValueChange={() =>
                this.setState({ autoSignIn: !this.state.autoSignIn })
              }
            />
            <Text style={{ fontSize: 15, color: "grey" }}>Remember Me</Text>
          </View>

          <TouchableOpacity style={Styles.signInButton} onPress={this.signin}>
              <Text
                style={{
                  fontSize: 30,
                  color: "white"
                }}
              >
                Sign In
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              Styles.signUpButton,
              { borderColor: "grey", width: 100, height: 40 }
            ]}
            onPress={()=> this.props.navigation.navigate("SignUp")}
          >
              <Text
                style={{
                  fontSize: 20,
                  color: "grey"
                }}
              >
                Sign Up
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return{

  }
};

const mapDispatchToProsp = dispatch => {
  return bindActionCreators({ signIn }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp
)(SignIn);

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
  bottomBar: {
    flexDirection: "column",
    width: 300,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  text: {
    color: "white"
  },
  signUpButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30
  },
  signInButton: {
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
