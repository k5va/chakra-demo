import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '..';
import { Login } from '../../pages';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
};
