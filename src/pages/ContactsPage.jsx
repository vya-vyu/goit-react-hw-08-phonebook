import ContactsList from 'components/ContactsList/ContactsList';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import Form from 'components/Form/Form';
import UserMenu from 'components/UserMenu/UserMenu';

const ContactsPage = () => {
  return (
    <>
      <UserMenu />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'wrap',
          marginTop: '20px',

          justifyContent: 'center',

          color: '#010101',
        }}
      >
        <Form />
        <div>
          <FilterContacts />
          <ContactsList />
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
