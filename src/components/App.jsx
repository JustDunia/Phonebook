import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoding = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <>
          <h2>Contacts:</h2>
          <Filter />
          <ContactList />
        </>
      )}
      {!error && contacts.length === 0 && !isLoding && (
        <p>Your phonebook is empty.</p>
      )}
      {isLoding && <p>Loading...</p>}
    </>
  );
};
