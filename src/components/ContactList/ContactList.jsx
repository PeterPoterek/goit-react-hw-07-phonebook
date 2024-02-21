import ContactListItem from 'components/ContactListItem/ContactListItem.jsx';
import { ContactListContainer, ContactListUl } from './ContactListStyles';

import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/phonebookSlice.js';
import { selectContacts, selectFilter } from '../../redux/selectors.js';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ContactListContainer>
      <ContactListUl>
        {filteredContacts.map(contact => {
          return (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
              removeContact={() => handleRemoveContact(contact.id)}
            />
          );
        })}
      </ContactListUl>
    </ContactListContainer>
  );
};

export default ContactList;
