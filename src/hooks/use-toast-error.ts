import { UseToastOptions, useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

const TOAST_DURATION = 5000;
const TOAST_ID = 'error-toast';

const toastOptions: UseToastOptions = {
  id: TOAST_ID,
  title: 'Data loading error',
  status: 'error',
  duration: TOAST_DURATION,
  isClosable: true,
};

export const useToastError = () => {
  const toast = useToast(toastOptions);

  return {
    toast: useCallback(
      (message: string) => {
        if (!toast.isActive(TOAST_ID)) {
          toast({ description: message });
        }
      },
      [toast]
    ),
  };
};
