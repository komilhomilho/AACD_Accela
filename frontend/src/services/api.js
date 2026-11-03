import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm';

const api = axios.create({
    baseURL: '/api',
    timeout: 10000, 
});

export default api;