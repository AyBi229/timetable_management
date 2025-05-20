import axios from 'axios';

/* async functions for api calls */

// fetch countries
export const fetchCountries = async () => {
    try {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const fetchRegions = async () => {
    try {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        return res.data;
    } catch (err) {
        console.log(err);
    }
}