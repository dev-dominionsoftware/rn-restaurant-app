import React, {useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";
import Separator from "../components/Separator";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return <View style={styles.container}>
        <SearchBar searchText={searchText}
                   onSearchChanged={(text) => setSearchText(text)}
                   onTextSubmit={() => searchApi(searchText)}
        />
        {
            errorMessage ? <Text>{errorMessage}</Text> : <Text>First restaurnat name is {results.length}</Text>
        }
        <ResultsList results={filterResultsByPrice('$')} title='Const Effective'/>
        <Separator/>
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricer'/>
        <Separator/>
        <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});

export default SearchScreen
