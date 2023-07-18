import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Container } from '@mui/system';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoding = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ContactForm />
          {error && <p>{error}</p>}
          {contacts.length > 0 && (
            <>
              <Typography component="h2" variant="h5">
                Contacts
              </Typography>
              <Filter />
              <ContactList />
            </>
          )}
          {!error && contacts.length === 0 && !isLoding && (
            <Typography component="h2" variant="h5">
              Your phonebook is empty.
            </Typography>
          )}
          {isLoding && <p>Loading...</p>}
        </Box>
      </Container>
    </>
  );
};

export default Contacts;
