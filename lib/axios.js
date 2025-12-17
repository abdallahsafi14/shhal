import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // This is crucial for browser-side requests to include cookies 
  // if you were validating against the backend domain directly (CORS)
  withCredentials: true 
});

export default api;