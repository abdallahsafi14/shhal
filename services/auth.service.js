import api from '@/lib/axios';

export const AuthService = {
  login: async (credentials) => {
    // credentials = { email, password } or { phone, password }
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  getMe: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  verifyOtp: async (data) => {
    const response = await api.post('/auth/verify-otp', data);
    return response.data;
  },
  
  resendOtp: async (data) => {
    const response = await api.post('/auth/resend-otp', data);
    return response.data;
  }
};
