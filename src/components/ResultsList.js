import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import ResultsDetails from "./ResultsDetails";

const ResultsList = ({title, results}) => {
    return <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal={true}
            data={results}
            renderItem={({ item }) => {
                return <ResultsDetails name={item.name} reviewCount={item.review_count} rating={item.rating} image='' />
            }}
            keyExtractor={result => result.id}/>
    </View>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    review: {
        fontSize: 12,
    },
});

export default ResultsList
