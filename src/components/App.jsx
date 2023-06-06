import { AddContactForm } from './AddContactForm/AddContactForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Layout>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section firstTitle="Contacts">
        <Contacts>
          <Filter />
        </Contacts>
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
