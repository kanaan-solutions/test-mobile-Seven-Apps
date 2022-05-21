import axios from 'axios';

const api = axios.create({
    baseURL: 'https://developer.spotify.com/documentation/web-api/quick-start/',
})

export default api;