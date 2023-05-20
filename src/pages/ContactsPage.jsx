import ContactsList from 'components/ContactsList/ContactsList';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import Form from 'components/Form/Form';
import UserMenu from 'components/UserMenu/UserMenu';

const ContactsPage = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '40px',
        // justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <UserMenu />
      <Form />
      <h2>Contacts</h2>
      <FilterContacts />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
