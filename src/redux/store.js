import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebookSlice';

export const store = configureStore({
  reducer: { phonebook: phonebookReducer },
});
