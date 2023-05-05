import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { FC, forwardRef } from 'react';

type FormInputProps = InputProps & {
  isError: boolean;
  errorMessage?: string;
  labelText: string;
  helperText: string;
};

export const FormInput: FC<FormInputProps> = forwardRef<
  HTMLInputElement,
  FormInputProps
>(({ isError, errorMessage, labelText, helperText, ...props }, ref) => {
  return (
    <FormControl isInvalid={isError}>
      <FormLabel>{labelText}</FormLabel>
      <Input ref={ref} {...props} />
      {isError ? (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
});
