import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import ResultsDetails from "./ResultsDetails";
import Separator from "./Separator";

const ResultsList = ({title, results}) => {
    return (
        results.length === 0 ? null :
            <View>
                <Text style={styles.title}>{title}</Text>
                <FlatList
                    horizontal={true}
                    data={results}
                    renderItem={({item}) => {
                        return <ResultsDetails name={item.name} reviewCount={item.review_count} rating={item.rating}
                                               imageUrl={item.image_url}/>
                    }}
                    keyExtractor={result => result.id}
                    showsHorizontalScrollIndicator={false}
                />
                <Separator/>
            </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginStart: 16,
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
