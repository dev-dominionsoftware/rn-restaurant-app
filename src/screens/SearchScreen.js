import React, {useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return <View style={styles.container}>
        <SearchBar searchText={searchText}
                   onSearchChanged={(text) => setSearchText(text)}
                   onTextSubmit={() => searchApi(searchText)}
        />
        {
            errorMessage ? <Text>{errorMessage}</Text> : <Text>We hav found {results.length} results</Text>
        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});

export default SearchScreen
