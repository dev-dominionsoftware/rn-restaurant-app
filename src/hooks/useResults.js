import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hi there');
        try {
            const responce = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                }
            });
            setResults(responce.data.businesses);
        } catch (e) {
            setErrorMessage('Something went wrong');
        }
    }

    // Glossary:
    // useEffect(() => {}) - run arrow function when component is rendered
    // useEffect(() => {}, []) - run arrow function only once at the beginning
    // useEffect(()=>, [value]) - run arrow function at the beginning and when value has changed

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};
