import { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';

export const Footer: FC = () => {
  return (
    <Box bgColor={'blue.100'}>
      <Container maxW={'container.lg'} pt="1rem">
        <div>@Footer</div>
      </Container>
    </Box>
  );
};
