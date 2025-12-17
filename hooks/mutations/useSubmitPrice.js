import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PriceService } from '@/services/prices.service';

export const useSubmitPrice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PriceService.submitPrice,
    onSuccess: () => {
      // Invalidate queries to refresh data or user points
      queryClient.invalidateQueries(['user-profile']);
      alert('تم إضافة السعر بنجاح، سيتم مراجعته قريباً'); // Price added successfully
    },
    onError: (error) => {
      console.error(error);
    }
  });
};