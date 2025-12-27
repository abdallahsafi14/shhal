import { toast } from 'sonner';

export const handleApiError = (error) => {
  const message = error.response?.data?.message || error.message || 'حدث خطأ ما، يرجى المحاولة مرة أخرى';
  
  toast.error(message, {
    position: 'top-center',
    style: {
      direction: 'rtl',
      fontFamily: 'inherit',
    },
  });

  return Promise.reject(error);
};
