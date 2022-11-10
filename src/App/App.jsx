// import React, { Component } from 'react';
import { useState } from 'react';
import '../index.scss'

//*      Libraries      //
import { nanoid } from 'nanoid';

//*      Components      //
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Container from 'components/Container';
import Section from 'components/Section/Section';
import useLocalStorage from 'hooks/useLocalStorage';


//*      Root      //
export default function App() {
  // state = {
  //   contacts: [
  //     { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  //     { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  //     { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  //   name: '',
  //   number: '', };

  const [contacts, setContacts] = useLocalStorage('contacts',[
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ]);
  const [filter, setFilter] = useState('');
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');


 

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
    
      setContacts ({
        contacts: [contact, ...contacts],
      });
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

  //*     При обновлении страницы наши контакты на месте,    //
 //*           сохренены в локал сторадж        //
  
// const componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts= JSON.parse(contacts);

// //*    что бы в контакты не сохранилось null   //
//   if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//    }
//  
  
  // const componentDidUpdate(prevProps, prevState) {
  //     const { contacts } = this.state;
  //   const nextContacts = contacts;

  //   const prevContacts = prevState.contacts;

  //  //* Проверяем что бы не зациклить компонент  //
  //   if (nextContacts !== prevContacts) {
  //     console.log('Обновилось поле contacts, записываю contacts в хранилище');
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }


  // render() {
    // const { filter } = this.state;
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


//  useEffect(()=>{
//   const contacts = localStorage.getItem('contacts');
//     const parsedContacts= JSON.parse(contacts);
  
//   this.setState({ contacts: parsedContacts });
// }, [parsedContacts])

// useEffect(()=>{
//   const nextContacts = contacts;
//   // const prevContacts = prevState.contacts;
  
//   console.log('Обновилось поле contacts, записываю contacts в хранилище');
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
// }, [contacts])