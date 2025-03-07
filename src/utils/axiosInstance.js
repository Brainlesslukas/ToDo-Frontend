import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_DOMAIN

const axiosInstance = axios.create({
    baseURL: `${apiUrl}`,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
