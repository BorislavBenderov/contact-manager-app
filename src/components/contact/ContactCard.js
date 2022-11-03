import React from 'react';
import user from '../../images/user.png';

export const ContactCard = ({contact}) => {
    return (
        <div className="item">
            <img className='ui avatar image' src={user} alt="user" />
            <div className="contact">
                <div className="header">{contact.name}</div>
                <div>{contact.email}</div>
            </div>
            <i className='trash alternate outline icon'
            style={{color:'red', marginTop: "7px"}}></i>
        </div>
    );
}
