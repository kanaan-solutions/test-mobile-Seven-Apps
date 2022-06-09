import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

export default api;
export const authorizationEndpoint =  "https://accounts.spotify.com/authorize";
export const tokenEndpoint = "https://accounts.spotify.com/api/token";