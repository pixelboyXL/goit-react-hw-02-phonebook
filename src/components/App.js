import React, { Component } from "react";
import shortid from "shortid";
import { GlobalStyle, MainTitle, ContactsTitle, WarningMessage } from './GlobalStyles';
import { Box } from 'components/Box';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addNewContact = (name, number) => {
    const { contacts } = this.state;
    const checkContact = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(prevState => (
      checkContact ? alert(`${name} is already in contacts`) : { contacts: [newContact, ...prevState.contacts],}
    ));
  };
  initialiseFilter = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    }); 
  };
  doFiltering = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };
  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <Box as="section"
        mx="auto"
        mt="200px"
        width="340px"
        p={5}
        bg="maybeYellow"
        border="normal"
        borderRadius="sm"
        borderColor="almostDarkGreen"
        boxShadow="shadow"
      >
        <Box as="div" mb={5}>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm addNewContact={this.addNewContact} />
        </Box>
        <Box as="div">
          <ContactsTitle>Contacts</ContactsTitle>
          {contacts.length !== 0
            ?
            <>
              <Filter filter={filter} initialiseFilter={this.initialiseFilter} />
              <ContactList doFiltering={this.doFiltering} deleteContact={this.deleteContact} />
            </>
            :
            <WarningMessage>Looks like you don`t have any contacts yet or just clear them all. Please add new contact.</WarningMessage>}
        </Box>
        <GlobalStyle />
      </Box>
    );
  };
};

/* <div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'
  }}
>
  React homework template
</div> */