import PropTypes from 'prop-types';
import { ContactItem, ContactsList, DeleteButton } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const Contacts = ({ children }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {children}
      <ContactsList>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <p>
                {name}: {number}
              </p>
              <DeleteButton
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </DeleteButton>
            </ContactItem>
          );
        })}
      </ContactsList>
    </>
  );
};

Contacts.propTypes = {
  children: PropTypes.node,
};
