import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../db/initialContacts.json';
import { fetchContacts } from './operations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    initialContacts,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.initialContacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },

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

export const {
  addContact,
  deleteContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
