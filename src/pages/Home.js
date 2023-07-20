import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import { ContactPhone } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
      }}
    >
      <Avatar
        sx={{ mb: 5, bgcolor: 'secondary.main', width: 100, height: 100 }}
      >
        <ContactPhone sx={{ fontSize: 50 }} />
      </Avatar>
      <Typography component="h2" variant="h4">
        Welcome to PhoneBook
      </Typography>
      <Typography component="h3" variant="h5">
        Please Sign in or register new user
      </Typography>
      <Box sx={{ mt: 5 }}>
        <Button href="/login" type="button" variant="contained" sx={{ mt: 3 }}>
          Sign In
        </Button>
        <Button
          href="/register"
          type="button"
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};
export default Home;
