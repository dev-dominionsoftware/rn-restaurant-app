import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetails from "./ResultsDetails";
import Separator from "./Separator";
import {withNavigation} from "react-navigation"; // See bottom file for explanation

const ResultsList = ({title, results, navigation}) => {
    return (
        results.length === 0 ? null :
            <View>
                <Text style={styles.title}>{title}</Text>
                <FlatList
                    horizontal={true}
                    data={results}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('ResultsShow', {id: item.id})
                            }}>
                                <ResultsDetails name={item.name} reviewCount={item.review_count} rating={item.rating}
                                                imageUrl={item.image_url}/>
                            </TouchableOpacity>
                        )
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

export default withNavigation(ResultsList) // Wrapping ResultsList with function withNavigation case, that object with props
// is passed to ResultsList directly, so we can receive it as argument in our arrow function
