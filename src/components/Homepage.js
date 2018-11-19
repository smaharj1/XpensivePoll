import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class Homepage extends React.Component {

    constructor() {
        super();
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