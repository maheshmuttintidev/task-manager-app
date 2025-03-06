import axios, { AxiosInstance } from 'axios';

import { getToken } from '@/utils/AsyncStorage';

const api = axios.create({
    baseURL: 'https://task-manager-express-backend-apis.onrender.com'
})


api.interceptors.request.use(async (config) => {
    const token = await getToken();

    if(!token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default api;