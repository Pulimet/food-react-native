import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            if (price.length === 0) {
                return result.price == null
            } else {
                return result.price === price;
            }
        });
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text style={styles.resultsNum}>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
                <ResultsList results={filterResultsByPrice('')} title="Unknown price"/>
            </ScrollView>
        </>

    );
};

const styles = StyleSheet.create({
    resultsNum: {
        marginVertical: 10,
        marginLeft: 15
    },
});

export default SearchScreen