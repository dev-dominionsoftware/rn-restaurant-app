import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ResultsDetails = ({image, name, rating, reviewCount}) => {
    const review = `${rating} Stars, ${reviewCount} Reviewers`;

    return <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.review}>{review}</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginEnd: 16,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    review: {
        fontSize: 12,
    },
});

export default ResultsDetails
