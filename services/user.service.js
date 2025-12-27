import api from '@/lib/axios';

export const UserService = {
  getProfile: async () => {
    const response = await api.get('/user/profile');
    return response.data;
  },

  updateProfile: async (data) => {
    const response = await api.patch('/user/profile', data);
    return response.data;
  },

  getStats: async () => {
    const response = await api.get('/user/stats');
    return response.data;
  },

  getOrders: async () => {
    const response = await api.get('/user/orders');
    return response.data;
  },

  getPoints: async () => {
    const response = await api.get('/user/points');
    return response.data;
  }
};
