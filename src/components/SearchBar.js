import React from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar = ({searchText, onSearchChanged, onTextSubmit}) => {
    return <View style={styles.container}>
        <Feather style={styles.iconSearch} name="search"/>
        <TextInput style={styles.textInput} placeholder='Search' onChangeText={onSearchChanged} value={searchText}
                   autoCapitalize="none" autoCorrect={false} onEndEditing={onTextSubmit}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#f0eeee',
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        marginStart: 8,
        marginEnd: 8,
        fontSize: 18,
    },
    iconSearch: {
        fontSize: 32,
        padding: 4,
        alignSelf: 'center',
    },
});

export default SearchBar
