import React, {useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState('')

    return <View style={styles.container}>
        <SearchBar searchText={searchText} onSearchChanged={(text) => setSearchText(text)} onTextSubmit={() => { console.log('submitted')}}/>
        <Text>{searchText}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});

export default SearchScreen
