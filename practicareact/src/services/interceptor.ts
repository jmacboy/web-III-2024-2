import axios, { InternalAxiosRequestConfig } from 'axios';
import { getLocalStorage, removeLocalStorage } from '../utils/LocalStorageUtils';
import { REFRESH_KEY, TOKEN_KEY } from '../utils/CONSTANTS';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
});

apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log('error', error);
        if (error.response?.status === 401) {
            try {
                const refreshToken = getLocalStorage(REFRESH_KEY);
                if (!refreshToken) {
                    window.location.href = '/login';
                    return Promise.reject(error);
                }
                const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
                    refresh: getLocalStorage(REFRESH_KEY),
                })
                localStorage.setItem('token', response.data.access);
            } catch (authError) {
                if (window.location.pathname !== '/login') {
                    removeLocalStorage(TOKEN_KEY);
                    removeLocalStorage(REFRESH_KEY);
                    window.location.href = '/login';
                }
                console.log("auth error", authError)
                return Promise.reject(authError)
            }
            return apiClient.request(error.config)
        }

        return Promise.reject(error)
    });


export default apiClient;