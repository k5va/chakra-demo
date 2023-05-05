import { FC } from 'react';
import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from '..';

export const Header: FC = () => {
  return (
    <Container maxW={'container.lg'} pt="1rem">
      <header>
        <nav>
          <List display="flex" justifyContent="space-between">
            <ListItem
              transitionDuration="0.3s"
              _hover={{ transform: 'scale(1.2)' }}
            >
              <Link as={RouterLink} to={'/login'}>
                <Logo />
              </Link>
            </ListItem>
            <ListItem>
              <Link></Link>
            </ListItem>
          </List>
        </nav>
      </header>
    </Container>
  );
};
