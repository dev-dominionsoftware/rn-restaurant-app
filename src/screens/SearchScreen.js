import React, {useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const responce = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchText,
                    location: 'san jose',
                }
            });
            setResults(responce.data.businesses);
        } catch (e) {
            setErrorMessage('Something went wrong');
        }
    }

    return <View style={styles.container}>
        <SearchBar searchText={searchText} onSearchChanged={(text) => setSearchText(text)} onTextSubmit={searchApi}/>
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
