import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import firebase from 'react-native-firebase';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import Homepage from './src/components/Homepage'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSigninInProgress: false,
      user: null
    };

    this._signIn = this._signIn.bind(this);
  }

  async componentDidMount() {
     
    // await GoogleSignin.revokeAccess();
    // await GoogleSignin.signOut();
  }

  async _signIn() {
    try {
      // Add any configuration settings here:
      await GoogleSignin.configure();
      console.warn("Configure done")
  
      const data = await GoogleSignin.signIn();
  
      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
      // login with credential
      const currentUser = await firebase.auth().signInWithCredential(credential)
      // const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
  
      // console.warn(JSON.stringify(currentUser.user.toJSON()));
      this.setState({
        user: currentUser
      })
    } catch (e) {
      // console.error(e);
    }
  }

  render() {

    return (
      <ScrollView>
        <Text style={styles.welcome}>Xpensive Poll</Text>
        
          <TouchableOpacity 
            onPress={this._signIn}          
          >
            <Image
              source={require('./assets/GoogleSignIn.png')}
            />
          </TouchableOpacity>

        {
          this.state.user ? 
          <Homepage></Homepage> : 
          null
        }
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
