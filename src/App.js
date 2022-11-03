import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { AddContact } from './components/contact/AddContact';
import { ContactList } from './components/contact/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem("contacts"));

    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
