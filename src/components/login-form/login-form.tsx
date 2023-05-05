import { FC } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '@/components';

const MIN_PASSWORD_LENGTH = 8;

const loginFormSchema = z.object({
  login: z.string().email(),
  password: z
    .string()
    .min(
      MIN_PASSWORD_LENGTH,
      `Password must be at least ${MIN_PASSWORD_LENGTH} symbols`
    ),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

export const LoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <form onSubmit={handleSubmit((value) => console.log(value))}>
      <Flex
        direction="column"
        gap="1rem"
        border="2px"
        borderColor="azure"
        p="1rem"
        borderRadius="lg"
      >
        <FormInput
          placeholder="john@doe.com"
          labelText="Email"
          errorMessage={errors.login?.message}
          helperText="Provide a valid email"
          isError={!!errors.login}
          {...register('login')}
        />
        <FormInput
          type="password"
          labelText="Password"
          errorMessage={errors.password?.message}
          helperText="At least 8 symbols"
          isError={!!errors.password}
          {...register('password')}
        />
        <Button type="submit" isLoading={isSubmitting}>
          Sign in
        </Button>
      </Flex>
    </form>
  );
};
