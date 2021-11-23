import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    return <View style={styles.container}>
        <SearchBar onSearchChanged={(text) => {
            console.log(text)
        }}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});

export default SearchScreen
