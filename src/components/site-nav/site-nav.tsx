import { FC } from 'react';
import { Link, List, ListItem } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

export const SiteNav: FC = () => {
  return (
    <List display="flex" gap={'1rem'}>
      <ListItem>
        <Link as={RouterLink} to={'/'}>
          Photos
        </Link>
      </ListItem>
      <ListItem>
        <Link as={RouterLink} to={'/'}>
          About
        </Link>
      </ListItem>
      <ListItem>
        <Link as={RouterLink} to={'/login'}>
          Login
        </Link>
      </ListItem>
    </List>
  );
};
