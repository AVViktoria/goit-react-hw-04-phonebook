// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import '../index.scss'

//*      Libraries      //
import { nanoid } from 'nanoid';

//*      Components      //
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Container from 'components/Container';
import Section from 'components/Section/Section';
import { useLocalStorage } from 'hooks/useLocalStorage';


//*      Root      //
export default function App() {

const initPhoneBook = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];


  const [contacts, setContacts] = useLocalStorage("contacts", initPhoneBook);
  const [filter, setFilter] = useState('');


useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

 

  //*  удаляем контакт из  списка  фильтра   //
  const deleteContactItem = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId),
    );
  };

  //*  берем  данные по сабмиту  кнопки  //
  const addContact = ({ name, number }) => {
    const normalizedFilter = name.toLowerCase();
    
    const checkByName = contacts.find(contact => contact.name.toLowerCase() === normalizedFilter);
    if (checkByName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name, number,
        completed: false,
      };
    
      setContacts(prev=>[...prev, contact]) 
      
      // ({
      //   contacts: [contact, ...contacts],
      // });
    };
  }

 //*  фильтруем по имени  //
  const getVisibleContacts = () => {
    // const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
    // *  прописываем  внутри инпута   //
  const handleChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  
    const visibleContacts =  getVisibleContacts();
    return (
      <>
        <Section >
        <Container >
        <h1 className = "title">Phonebook</h1>
          <ContactForm onSubmit={addContact} />
        </Container>
        <Container >
          <h2 className = "title">Contacts</h2>
        <Filter value={filter}
            onChange={handleChange}/>
          <ContactList
            contacts={visibleContacts}
            onDeleteContactItem={deleteContactItem}
          />
          </Container>
          </Section>
      </>
    );
  }
// }

