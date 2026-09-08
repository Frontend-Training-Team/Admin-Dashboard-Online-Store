import api from './axios';

export const postLogin = (payload) => api.post('/auth/login', payload);
export const logout = () => api.post('/auth/logout');
export const getCurrentUser = () => api.get('/auth/me');