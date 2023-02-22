import { nanoid } from '@reduxjs/toolkit';
import { addContactAction } from 'components/redux/contactsRedux/contacts-slice';
import { selectContacts } from 'components/redux/contactsRedux/contactsSelector';
import { useState } from 'react';
// import css from './Contacts/contacts.module.css'
import { useDispatch, useSelector } from 'react-redux';

export const Contacts = () => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const dispatch = useDispatch();
  const handleOnChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value.trim().toLowerCase() }));
    console.log(value);
  };

  const contacts = useSelector(selectContacts);

  const onSubmit = e => {
    e.preventDefault();
    const data = { ...state, id: nanoid() };
    if (contacts.findIndex(contact => data.name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      //
      dispatch(addContactAction(data));
    }
  };

  const { name, number } = state;

  return (
    <>
      <h1>PhoneBook</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleOnChange}
          value={name}
          minLength={3}
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleOnChange}
          value={number}
          minLength={8}
        />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
