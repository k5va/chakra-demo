import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '..';
import { Login, Photos } from '../../pages';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Photos />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
