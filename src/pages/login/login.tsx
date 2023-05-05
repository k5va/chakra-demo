import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';
import { LoginForm } from '@/components';

export const Login: FC = () => {
  return (
    <Box>
      <Heading as={'h1'} mb={'1rem'} textAlign={'center'}>
        Chakra UI demo
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={'1rem'}>
        <Box minH={'5rem'} bgImg={'./blue-trianglify.jpg'}></Box>
        <LoginForm />
      </SimpleGrid>
    </Box>
  );
};
