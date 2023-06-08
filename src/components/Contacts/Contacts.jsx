import PropTypes from 'prop-types';
import { ContactItem, ContactsList, DeleteButton } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';

export const Contacts = ({ children }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {children}
      {isLoading && <Loader />}
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
