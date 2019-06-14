import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        authorization: localStorage.getItem('token')
    }
})

// This will relook up token to get it instead of only once 
instance.interceptors.request.use(
    (config) => {
      config.headers.authorization = localStorage.getItem('token');
      return config;
    },
    (err) => {
       
        return Promise.reject(err)
    }
)

export default instance;