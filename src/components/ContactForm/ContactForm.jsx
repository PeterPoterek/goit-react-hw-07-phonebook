import {
  ContactFormContainer,
  ContactFormUI,
  ContactFormLabel,
  ContactFormInput,
  ContactFormAddButton,
} from './ContactFormStyles';

import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/phonebookSlice.js';
import { selectContacts } from '../../redux/selectors.js';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = e => {
    e.preventDefault();

    const nameInput = e.target[0];
    const nameInputValue = nameInput.value;
    const namePattern = new RegExp(nameInput.pattern);

    const numberInput = e.target[1];
    const numberInputValue = numberInput.value;
    const numberPattern = new RegExp(numberInput.pattern);

    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === nameInputValue.toLowerCase()
    );

    if (
      namePattern.test(nameInputValue) &&
      numberPattern.test(numberInputValue) &&
      !isContactExists
    ) {
      const newContact = {
        id: `id-${nanoid()}`,
        name: nameInputValue,
        number: numberInputValue,
      };

      dispatch(addContact(newContact));
    } else {
      const errorMessage = isContactExists
        ? `${nameInputValue} is already in contacts.`
        : namePattern.test(nameInputValue)
        ? numberInput.title
        : nameInput.title;

      alert(errorMessage);
    }
  };

  return (
    <ContactFormContainer>
      <ContactFormUI onSubmit={handleFormSubmit}>
        <ContactFormLabel htmlFor="name">Name:</ContactFormLabel>
        <ContactFormInput
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <ContactFormLabel htmlFor="number">Number:</ContactFormLabel>
        <ContactFormInput
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <ContactFormAddButton type="submit">Add contact</ContactFormAddButton>
      </ContactFormUI>
    </ContactFormContainer>
  );
};

export default ContactForm;
