import api from '@/lib/axios';

export const ProductService = {
  // Corresponds to your "Search Page"
  getAll: async (params) => {
    // params = { search: 'milk', category: 1, sort: 'price_asc' }
    const response = await api.get('/products', { params });
    return response.data;
  },

  // Corresponds to your "Product Detail"
  getById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  }
};