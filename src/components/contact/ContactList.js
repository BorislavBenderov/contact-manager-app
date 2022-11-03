import React from 'react';
import { ContactCard } from './ContactCard';

export const ContactList = ({contacts}) => {
  return (
    <div className='ui celled list'>
        {contacts.map(contact => <ContactCard key={contact.name} contact={contact}/>)}
        </div>
  );
}
