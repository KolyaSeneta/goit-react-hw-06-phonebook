import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer } from './contactsRedux/contacts-slice'
import { filterReducer } from "./contactsRedux/filter-slice";

export const store = configureStore({
    reducer: {
    contacts: contactsReducer,
      filter: filterReducer
       
  }
});