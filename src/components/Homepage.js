import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { GoogleSignin } from "react-native-google-signin";
import firebase from "react-native-firebase";

export default class Homepage extends React.Component {
  constructor() {
    super();
    this.ref = null;
    this.unsubscribe = null;

    this.state = {
        topPolls: []
    }

    this.autoSignIn = this.autoSignIn.bind(this);
  }

  async componentDidMount() {
    await this.autoSignIn();

    if(this.state.user){
        this.ref = firebase.firestore().collection('polls');
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);

    }
  }

    onCollectionUpdate = (querySnapshot) => {
        let topPolls = [];

        querySnapshot.forEach(doc => {
            let {description, options, title} = doc.data();
            topPolls.push({
                id: doc.id,
                description,
                title,
                options 
            })
        });

        this.setState({
            topPolls
        })

        console.log("POLLS", topPolls)
    }


    componentWillUnmount() {
        this.unsubscribe();
    }

  async autoSignIn() {
    try {
      await GoogleSignin.configure();

      const user = await GoogleSignin.signInSilently();
      this.setState({ user });

    } catch (error) {
      // Navigate to login page.
      Actions.login();
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{ fontSize: 30 }}>Logged in Successfully!</Text>
        </View>
      </ScrollView>
    );
  }
}
