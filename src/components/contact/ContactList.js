import React from 'react';
import { ContactCard } from './ContactCard';

export const ContactList = ({contacts, removeContactHandler}) => {
  const deleteContactList = (id) => {
    removeContactHandler(id);
  }
  return (
    <div className='ui celled list'>
        {contacts.map(contact => <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactList}/>)}
        </div>
  );
}
