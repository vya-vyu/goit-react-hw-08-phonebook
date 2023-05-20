import { useSelector, useDispatch } from 'react-redux';

import { selectFilteredContacts } from 'redux/Contacts/contactsSelectors';
import { getContacts, deleteContact } from 'redux/Contacts/contactsOperation';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import {
  Grid,
  ListItem,
  List,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Loader>
        <Grid item xs={12} md={6}>
          <List>
            {filteredContacts.map(({ id, name, number }) => {
              return (
                <ListItem key={id}>
                  <ListItemAvatar>
                    <Avatar></Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <span>
                      {name}: {number}
                    </span>
                  </ListItemText>
                  <IconButton
                    edge="end"
                    id={id}
                    type="button"
                    onClick={e => {
                      dispatch(deleteContact(e.currentTarget.id));
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              );
            })}
          </List>
        </Grid>

        {/* <ul>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <div className={s.item}>
                  {' '}
                  <span>
                    {name}: {number}
                  </span>
                  <button
                    id={id}
                    type="button"
                    className={s.btn}
                    onClick={e => {
                      dispatch(deleteContact(e.target.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul> */}
      </Loader>
    </>
  );
};

export default ContactsList;
