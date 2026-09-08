import axios from 'axios';

const api = axios.create({
  baseURL: "https://e-commerce-api-3wara.vercel.app/",
  withCredentials: true
});
// Request Interceptor
api.interceptors.request.use(
  (config) => {
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
// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
  
    if (!error.response) {
      error.userMessage =
        error.code === 'ECONNABORTED'
          ?'The request time has ended, try again'
          : 'Unable to connect to the server, check your internet connection'
      return Promise.reject(error);
    }

    const { status, data } = error.response;

   
    const apiMessage = data?.message || data?.error;

    switch (status) {
      case 400:
        error.userMessage = apiMessage || 'The order information is incorrect';
        break;

      case 401:
        // Unauthorized 
        localStorage.removeItem('token');
        error.userMessage = apiMessage || 'The session has ended, log in again';
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
        break;

      case 402:
        // Payment Required -> Stripe payment failed / declined card
        error.userMessage = apiMessage || 'The payment failed, check your card details.'
        break;

      case 403:
        error.userMessage = apiMessage || 'You donot have permissions to do this.'
        break;

      case 404:
        error.userMessage = apiMessage || 'The requested item is not available';
        break;

      case 500:
        error.userMessage = apiMessage || 'A server error occurred, try again later'
        break;

      case 501:
        error.userMessage = apiMessage || 'This feature is not available right now';
        break;

      case 502:
        error.userMessage = apiMessage || 'The server is temporarily unavailable, try again later.'
        break;

      case 503:
        error.userMessage = apiMessage || 'The service is currently under maintenance';   
             break;

      case 504:
        error.userMessage = apiMessage || 'The server took a long time to respond, try again later'
        break;

      default:
        error.userMessage = apiMessage || 'An unexpected error occurred'
    }
    return Promise.reject(error);
  }
);

export default api;