import React, { Component } from 'react';
import '../index.scss'

//*      Libraries      //
import { nanoid } from 'nanoid';
// import styled from 'styled-components'
// import { color } from 'styled-system'




//*      Components      //
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Container from 'components/Container';
import Section from 'components/Section/Section';


//*      Root      //
class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  //*  удаляем контакт из  списка  фильтра   //
  deleteContactItem = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  // //*                              //
  // formSubmitHandler = e => {
  //   e.preventDefault();
  //   console.log(e);
  // }
  

  //*  берем  данные по сабмиту  кнопки  //
  addContact = ({ name, number }) => {
    const normalizedFilter = name.toLowerCase();
    
    const checkByName = this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedFilter);
    if (checkByName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name, number,
        completed: false,
      };
    
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    };
  }

 //*  фильтруем по имени  //
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
    // //*  прописываем  внутри инпута   //
  handleChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  //*     При обновлении страницы наши контакты на месте,    //
 //*           сохренены в локал сторадж        //
  
componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts= JSON.parse(contacts);

//*    что бы в контакты не сохранилось null   //
  if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
   }
  
  
  componentDidUpdate(prevProps, prevState) {
      const { contacts } = this.state;
    const nextContacts = contacts;

    const prevContacts = prevState.contacts;

   //* Проверяем что бы не зациклить компонент  //
    if (nextContacts !== prevContacts) {
      console.log('Обновилось поле contacts, записываю contacts в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }


  render() {
    const { filter } = this.state;
    const visibleContacts =  this.getVisibleContacts();
    return (
      <>
        <Section >
        <Container >
        <h1 className = "title">Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </Container>
        <Container >
          <h2 className = "title">Contacts</h2>
        <Filter value={filter}
            onChange={this.handleChange}/>
          <ContactList
            contacts={visibleContacts}
            onDeleteContactItem={this.deleteContactItem}
          />
          </Container>
          </Section>
      </>
    );
  }
}

export default App;
