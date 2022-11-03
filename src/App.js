import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import { Header } from './components/header/Header';
import { AddContact } from './components/contact/AddContact';
import { ContactList } from './components/contact/ContactList';
import api from './api/contacts';

function App() {
  const [contacts, setContacts] = useState([]);

  const onCreate = async (userdata) => {
    const request = {
      id: uuid(),
      ...userdata
    };

    const response = await api.post('/contacts', request);
    setContacts(oldState => 
      [...oldState, response.data]
    )
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);

    setContacts(contacts.filter(contact => contact.id !== id));
  }

  useEffect(() => {
    fetch('http://localhost:3004/contacts')
    .then(res => res.json())
    .then(result => setContacts(Object.values(result)))
  }, [])

  return (
    <div className="ui container">
      <Header />
      <AddContact onCreate={onCreate} />
      <ContactList contacts={contacts} removeContactHandler={removeContactHandler} />
    </div>
  );
}

export default App;
