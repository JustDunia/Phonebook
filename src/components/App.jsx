import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/authorization/operations';
import { useAuth } from 'hooks';
import { useEffect } from 'react';

export const App = () => {
  const NotFound = lazy(() => import('./NotFound'));
  const Home = lazy(() => import('../pages/Home'));
  const Contacts = lazy(() => import('../pages/Contacts'));
  const Register = lazy(() => import('../pages/Register'));
  const Login = lazy(() => import('../pages/Login'));

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Authorization...</p>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute component={<Home />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<Contacts />} redirectTo="/" />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
