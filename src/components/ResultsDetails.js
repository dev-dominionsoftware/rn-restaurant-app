import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ResultsDetails = ({imageUrl, name, rating, reviewCount}) => {
    const review = `${rating} Stars, ${reviewCount} Reviewers`;

    return <View style={styles.container}>
        <Image style={styles.image} source={{
            uri: imageUrl
        }}/>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.review}>{review}</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginStart: 16,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginTop: 4,
        marginBottom: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    review: {
        fontSize: 12,
    },
});

export default ResultsDetails
