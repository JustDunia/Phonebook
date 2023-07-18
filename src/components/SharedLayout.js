import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const SharedLayout = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PhoneBook
          </Typography>

          {/* //not logged */}
          <Button href="login" color="inherit">
            Login
          </Button>
          <Button href="register" color="inherit">
            Register
          </Button>

          {/* //logged */}
          <Typography variant="button" component="p" color="inherit">
            Mail@mail.pl
          </Typography>
          <Button href="/" color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
