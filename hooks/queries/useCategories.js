import { useQuery } from '@tanstack/react-query';
import { CategoryService } from '@/services/category.service';

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: CategoryService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours (categories don't change often)
  });
};
