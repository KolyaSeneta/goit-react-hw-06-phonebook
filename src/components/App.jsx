import { useEffect,useState } from 'react';

import { nanoid } from 'nanoid';
import {Contacts} from './Contacts/Contacts'
import { Filter } from './Filter/Filter'
import ContactDelete from './Deleted/ContactDelete'


export const  App = () => {
 

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
 const [filter, setFilter] = useState('')
 const  handleOnChange = e => {
    const {  value } = e.target;
   setFilter( value );
  };
 const  handleOnSubmit = (e) => {
    const id = nanoid();
    const number = e.number;
    const name = e.name;
    const nameContacts = contacts

    
    if (nameContacts.findIndex(contact => name === contact.name) !== -1) {
     alert(`${name} is already in contacts.`);
    } else {
      setContacts([...contacts, {name,number,id}])
   }
    
  }
console.log(contacts);
  const  getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });

    return filterContactsList;
  };
  const handleOnDelete = e => {
    setContacts( contacts.filter(contact => contact.id !== e)
    );
  };
  useEffect(() => {
    const contactsStorage = localStorage.getItem('contacts')
    const parsed = JSON.parse(contactsStorage)
    console.log(parsed);
    
    if (parsed) {
      setContacts( parsed )
    }
  },[])
    
  useEffect(() => { 
     localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])

      
      return (
        <div>

          <Contacts handleOnSubmit = {handleOnSubmit} />
        
          <h2>Contacts</h2>
         <Filter  filter={filter} handleOnChange={handleOnChange}/>
        <ContactDelete
          contacts={getFilteredContacts()}
          handleOnDelete={handleOnDelete}
        />
        </div>
      );

    
    }
  

  