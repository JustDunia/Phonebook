import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';

export const App = () => {
  const NotFound = lazy(() => import('./NotFound'));
  const Home = lazy(() => import('../pages/Home'));
  const Contacts = lazy(() => import('../pages/Contacts'));
  const Register = lazy(() => import('../pages/Register'));
  const Login = lazy(() => import('../pages/Login'));

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
