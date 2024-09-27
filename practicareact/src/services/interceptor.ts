import axios, { InternalAxiosRequestConfig } from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
});

apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;