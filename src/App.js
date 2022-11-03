import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { AddContact } from './components/contact/AddContact';
import { ContactList } from './components/contact/ContactList';

function App() {
  const contacts = [
    {
      id: '1',
      name: 'Borislav',
      email: 'borislav@abv.bg'
    },
    {
      id: '2',
      name: 'Pesho',
      email: 'pesho@abv.bg'
    }
  ]

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
