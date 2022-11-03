import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { AddContact } from './components/contact/AddContact';
import { ContactList } from './components/contact/ContactList';

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
