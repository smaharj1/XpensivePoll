import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

export default class Homepage extends React.Component {

    constructor() {
        super();
        this.autoSignIn = this.autoSignIn.bind(this);
    }

    async componentDidMount(){
        await this.autoSignIn();
    }

    async autoSignIn(){
        try {
        await GoogleSignin.configure();

        const user = await GoogleSignin.signInSilently();
        this.setState({ user });

        // Navigate to homepage.
        } catch (error) {
            console.warn(error.code)
        // if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        //     // user has not signed in yet. Redirect to login page.
        // } else {
        // }

        // Navigate to login page.
        Actions.login();
        }
    }


    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={{fontSize: 30}}>Logged in Successfully!</Text>
                </View>

            </ScrollView>
        )
    }

}