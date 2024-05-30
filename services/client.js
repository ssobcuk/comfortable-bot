import axios from 'axios';

const client = axios.create({
  baseURL: 'https://bot-backend-nine.vercel.app/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    
},
});

export default client;
