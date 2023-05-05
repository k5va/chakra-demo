import { RouteObject } from 'react-router-dom';
import { Photos, Login } from '@/pages';
import { Layout } from '@/components';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Photos />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
];
