import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PriceService } from '@/services/prices.service';
import { toast } from 'sonner';

export const useSubmitPrice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PriceService.submitPrice,
    onSuccess: () => {
      // Invalidate queries to refresh data or user points
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.invalidateQueries({ queryKey: ['products'] });
      
      toast.success('تم إضافة السعر بنجاح، سيتم مراجعته قريباً', {
        position: 'top-center',
        style: { direction: 'rtl' }
      });
    }
  });
};
