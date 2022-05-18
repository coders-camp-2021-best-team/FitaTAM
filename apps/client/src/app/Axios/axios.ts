import axios from 'axios';

const BASE_URL = 'https://fitatam-api.herokuapp.com/';

export const request = axios.create({
    baseURL: BASE_URL, // process.env['REACT_APP_API_URL'],
    withCredentials: true,
});
