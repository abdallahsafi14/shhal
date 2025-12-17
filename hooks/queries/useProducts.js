import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/products.service';

export const useProducts = (filters) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => ProductService.getAll(filters),
    keepPreviousData: true, // Good for search bars
  });
};