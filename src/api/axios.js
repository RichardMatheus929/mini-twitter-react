import axios from 'axios';

import { alertExpireToken, alertUserNotFound, alertInvalidFields } from '../utils/Alerts';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

// Interceptor de requisição
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      // Adicionando token no cabeçalho Authorization
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Se houver erro na requisição, rejeitamos imediatamente.
    return Promise.reject(error);
  }
);

// Interceptor de resposta
api.interceptors.response.use(
  (response) => {
    if (response.config.url.includes('signup')) {
      window.location.href = '/login';
    }
    return response;
  },
  (error) => {
    // Tratamento para erro de resposta 401
    if (error.response) {
      // Remove o token expirado do localStorage
      localStorage.removeItem('access');

      if (error.config.url.includes('signin')) {
        alertUserNotFound();
        return Promise.reject(error)
      }

      if (error.config.url.includes('signup')) {
        alertInvalidFields();
        return Promise.reject(error)
      }

      if (error.response.status === 401) {
        alertExpireToken();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
