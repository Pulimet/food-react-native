import {useState, useEffect} from 'react'
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            setErrorMessage('');
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Israel'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong :(')
        }
    };

    useEffect(() => {
        searchApi('Pasta');
    }, [])

    return [searchApi, results, errorMessage];
}