import { FC } from 'react';
import { Container, Grid } from '@chakra-ui/react';
import { Footer, Header } from '..';
import { Login } from '../../pages';

export const App: FC = () => {
  return (
    <Grid templateRows={'auto 1fr auto'} height={'100vh'}>
      <Header />
      <Container
        maxW={'container.lg'}
        display={'flex'}
        flexDirection={'column'}
      >
        <Login />
      </Container>
      <Footer />
    </Grid>
  );
};
