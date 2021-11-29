import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Image} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    return (
        result == null ? null :
            <View>
                <FlatList data={result.photos} renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                }} keyExtractor={photo => photo}/>
            </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginBottom: 8,
    }
})

export default ResultsShowScreen
