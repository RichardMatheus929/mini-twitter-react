import axios from 'axios';

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
    // Retorna a resposta diretamente
    return response;
  },
  (error) => {
    // Tratamento para erro de resposta 401
    if (error.response && error.response.status === 401) {
      // Remove o token expirado do localStorage
      localStorage.removeItem('access');
      
      // Aqui, redirecionamos para o login
      // Porém, essa navegação deve ser feita com cautela
      // Evite a navegação direta no interceptor, preferencialmente use um sistema global de gerenciamento de navegação.
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
