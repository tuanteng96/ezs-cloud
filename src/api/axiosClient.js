import axios from 'axios';
import queryString from 'query-string';
import { getToken } from "../helpers/localStorageUser";


const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'text/plain',
    },
    paramsSerializer: params => queryString.stringify(params),
});

// Request interceptor for API calls
axiosClient.interceptors.request.use(async(config) => {
    // Handle token here ...
    const token = await getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});


// Response interceptor for API calls
axiosClient.interceptors.response.use((response) => {

    // const { status, auto } = response.data;
    // //const token = await getToken();

    // if (status === 401) {
    //     if (auto === 'yes') {
    //         const config = response.config;
    //         //config.headers.Authorization = `Bearer ${token}`;
    //         return response.data;
    //     }
    // }

    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    // Check Error Token

    return Promise.reject(error);
});
export default axiosClient;