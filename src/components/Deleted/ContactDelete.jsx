import { deleteContactsAction } from 'components/redux/contactsRedux/contacts-slice';

import { selectFilterContacts } from 'components/redux/contactsRedux/FilterSelector';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';




 const ContactDelete = () => {
const dispatch = useDispatch()
   const contacts = useSelector(selectFilterContacts)
   
const deleteContact =(id)=>dispatch(deleteContactsAction(id))

  
  return (
    <div>
      <ul >
        {contacts.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}
            <button
              type="button"
              onClick={() => deleteContact(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  
  )
}

ContactDelete.propTypes = {
    contact: propTypes.arrayOf(propTypes.exact({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.number.isRequired,
    })
    ),
   

}
export default ContactDelete