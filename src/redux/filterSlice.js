import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilterContacts: (state, action) => action.payload,
  },
});

export const { getFilterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
