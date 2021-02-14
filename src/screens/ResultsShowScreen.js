import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({route}) => {
    const [result, setResult] = useState(null)
    const {id} = route.params;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
    };

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 12
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 12,
        marginVertical: 10
    }
})

export default ResultsShowScreen;