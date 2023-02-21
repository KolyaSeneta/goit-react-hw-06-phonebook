import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer } from '../contactsRedux/contacts-slice'

export const store = configureStore({
    reducer: {
       contacts: contactsReducer ,
       
  }
});