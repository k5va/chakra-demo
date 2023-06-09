import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@chakra-ui/react';
import { Footer, Header } from '@/components';

export const Layout: FC = () => {
  return (
    <Grid templateRows={'auto 1fr auto'} height={'100vh'}>
      <Header />
      <Container
        as={'main'}
        maxW={'container.lg'}
        display={'flex'}
        flexDirection={'column'}
        py={'1rem'}
      >
        <Outlet />
      </Container>
      <Footer />
    </Grid>
  );
};
