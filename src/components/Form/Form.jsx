import { useState } from 'react';

import { Grid, Box, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Contacts/contactsOperation';
import { selectContacts } from 'redux/Contacts/contactsSelectors';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const data = { name, number };
    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? window.alert(`${data.name} is already in contacts`)
      : dispatch(addContact(data));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="email"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={e => {
                setName(e.currentTarget.value);
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              required
              fullWidth
              name="number"
              label="Number"
              type="tel"
              id="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={e => {
                setNumber(e.currentTarget.value);
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
