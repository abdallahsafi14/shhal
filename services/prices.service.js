import api from '@/lib/axios';

export const PriceService = {
  // The "Add Price" contribution
  submitPrice: async (data) => {
    // data = { product_id, price, store_id, image }
    const response = await api.post('/inputs', data); 
    return response.data;
  }
};