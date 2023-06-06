import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../db/initialContacts.json';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { initialContacts },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.initialContacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.initialContacts = state.initialContacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
