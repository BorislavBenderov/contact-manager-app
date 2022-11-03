import React, { useState } from 'react'

export const AddContact = ({onCreate}) => {
  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  const changeHandler = (e) => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const userdata = Object.fromEntries(new FormData(e.target));

    onCreate(userdata);
  }

  return (
    <div className='ui main'>
      <h2>Add Contact</h2>
      <form className='ui form' onSubmit={onSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name='name'
            placeholder='Name'
            value={values.name}
            onChange={changeHandler} />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={changeHandler} />
        </div>
        <button className='ui button blue'>Add</button>
      </form>
    </div>
  );
}
