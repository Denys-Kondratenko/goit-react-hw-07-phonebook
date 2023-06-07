import PropTypes from 'prop-types';
import { ContactItem, ContactsList, DeleteButton } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const Contacts = ({ children }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {children}
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}

      {contacts.length > 0 && (
        <ContactsList>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ContactItem key={id}>
                <p>
                  ᛫ {name}: {number}
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
      )}
    </>
  );
};

Contacts.propTypes = {
  children: PropTypes.node,
};
