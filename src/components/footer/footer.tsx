import { FC } from 'react';
import { Box, Container, Link, List, ListItem } from '@chakra-ui/react';

export const Footer: FC = () => {
  return (
    <Box bgColor={'blue.100'} py={'1rem'}>
      <Container maxW={'container.lg'}>
        <List display="flex" gap={'1rem'}>
          <ListItem>
            <Link href={'/'}>Photos</Link>
          </ListItem>
          <ListItem>
            <Link href={'/'}>About</Link>
          </ListItem>
          <ListItem>
            <Link href={'/login'}>Login</Link>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};
