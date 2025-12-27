'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthService } from '@/services/auth.service';
import { localStorageUtils } from '@/lib/utils'; // I'll check if this exists or create it
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: AuthService.getMe,
    retry: false,
    staleTime: Infinity,
    enabled: typeof window !== 'undefined' && !!localStorage.getItem('token'),
  });

  const loginMutation = useMutation({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      queryClient.setQueryData(['user'], data.user);
      router.push('/');
    },
  });

  const registerMutation = useMutation({
    mutationFn: AuthService.register,
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      queryClient.setQueryData(['user'], data.user);
      router.push('/verify'); // Assuming there is a verification step
    },
  });

  const logoutMutation = useMutation({
    mutationFn: AuthService.logout,
    onSuccess: () => {
      localStorage.removeItem('token');
      queryClient.setQueryData(['user'], null);
      queryClient.clear();
      router.push('/login');
    },
    onSettled: () => {
       // In case the API call fails, we still want to clear local state
       localStorage.removeItem('token');
       queryClient.setQueryData(['user'], null);
       router.push('/login');
    }
  });

  const verifyOtpMutation = useMutation({
    mutationFn: AuthService.verifyOtp,
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      queryClient.setQueryData(['user'], data.user);
      router.push('/');
    },
  });

  const resendOtpMutation = useMutation({
    mutationFn: AuthService.resendOtp,
    onSuccess: () => {
      // Handle success (e.g., toast is already handled by interceptor or can add specific one)
    },
  });

  return {
    user: userQuery.data,
    isLoading: userQuery.isLoading,
    isError: userQuery.isError,
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    register: registerMutation.mutate,
    isRegistering: registerMutation.isPending,
    logout: logoutMutation.mutate,
    isLoggingOut: logoutMutation.isPending,
    verifyOtp: verifyOtpMutation.mutate,
    isVerifying: verifyOtpMutation.isPending,
    resendOtp: resendOtpMutation.mutate,
    isResending: resendOtpMutation.isPending,
    isAuthenticated: !!userQuery.data,
  };
};

