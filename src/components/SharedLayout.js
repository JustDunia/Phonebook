import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authorization/operations';

export const SharedLayout = () => {
  const { isLoggedIn, userData } = useAuth();
  const dispatch = useDispatch();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PhoneBook
          </Typography>

          {!isLoggedIn ? (
            <>
              <Button href="/login" color="inherit" sx={{ marginRight: 3 }}>
                Login
              </Button>
              <Button href="/register" color="inherit">
                Register
              </Button>
            </>
          ) : (
            <>
              <Typography
                variant="button"
                component="p"
                color="inherit"
                sx={{ marginRight: 3 }}
              >
                Hello, {userData.name}
              </Typography>
              <Button onClick={() => dispatch(logOut())} color="inherit">
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
