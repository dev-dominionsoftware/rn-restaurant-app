import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const ResultsShowScreen = ({ navigation}) => {
    const id = navigation.getParam('id');

    console.log(id)

    return (
        <View>
            <Text>Details screen</Text>
        </View>
    )
}

const style = StyleSheet.create({})

export default ResultsShowScreen
