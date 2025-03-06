import api from './api';

export const loginUser = async (payload: {email: string, password: string}) => {
    const response = await api.post('/auth/login', payload)
    return response.data.token;
}

export const signupUser = async (payload: {email: string, password: string, name?: string}) => {
    const response = await api.post('/auth/signup', payload)
    return response.data.token;
}