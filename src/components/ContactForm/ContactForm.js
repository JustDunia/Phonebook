import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const isContactExist = contacts.map(contact => contact.name).includes(name);
    !isContactExist
      ? dispatch(addContact({ name: name, number: number }))
      : Notiflix.Notify.failure(`${name} is already in contacts.`);
    setName('');
    setNumber('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, mb: 9, pr: 2 }}>
      <TextField
        id={nameInputId}
        name="name"
        autoComplete="name"
        autoFocus
        label="Name"
        sx={{ m: 1 }}
        variant="standard"
        required
        fullWidth
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        id={numberInputId}
        name="number"
        autoComplete="number"
        label="Number"
        sx={{ m: 1 }}
        variant="standard"
        required
        fullWidth
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, ml: 1 }}
        fullWidth
        size="small"
      >
        Add Contact
      </Button>
    </Box>
  );
};
