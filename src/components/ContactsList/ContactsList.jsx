import s from './ContactsList.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { selectFilteredContacts } from 'redux/Contacts/contactsSelectors';
import { getContacts, deleteContact } from 'redux/Contacts/contactsOperation';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';

const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Loader>
        <ul>
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
        </ul>
      </Loader>
    </>
  );
};

export default ContactsList;
