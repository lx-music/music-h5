import axios, { type AxiosError, type AxiosRequestConfig } from 'axios';

const Axios = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

Axios.interceptors.request.use((config: AxiosRequestConfig) => {

  return config;
})

Axios.interceptors.response.use((response) => {

  const result = response.data;

  return Promise.resolve(result);
}, (error: AxiosError) => {
  return Promise.reject(error);
})

export default Axios;