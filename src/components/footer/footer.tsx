import { FC } from 'react';
import { Box, Button, Container, HStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer: FC = () => {
  return (
    <Box bgColor={'blue.100'} py={'1rem'}>
      <Container maxW={'container.lg'}>
        <HStack justifyContent={['center', 'center', 'left']}>
          <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
            Facebook
          </Button>
          <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
            Twitter
          </Button>
          <Button colorScheme="red" leftIcon={<FaInstagram />}>
            Instagram
          </Button>
        </HStack>
      </Container>
    </Box>
  );
};
