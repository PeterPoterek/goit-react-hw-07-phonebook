import styled from 'styled-components';

import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from 'components/Filter/Filter.jsx';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const AppWrapper = styled.div`
  background-color: #1f2937;
  max-width: 750px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 2.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const AppHeader = styled.h2`
  margin-top: 0;
  font-size: 2rem;
`;

const App = () => {
  return (
    <>
      <AppContainer>
        <AppWrapper>
          <AppHeader>Phonebook</AppHeader>
          <ContactForm />

          <AppHeader>Contacts</AppHeader>
          <Filter />
          <ContactList />
        </AppWrapper>
      </AppContainer>
    </>
  );
};

export default App;
