import { createSlice } from "@reduxjs/toolkit";



const contactsSlice = createSlice({

    name: "contacts",
    initialState: {
        items:[]
    },
    reducers: {
        addContactAction(state, { payload }) {
            state.items = [...state.items, payload]
        },
        deleteContactsAction(state, { payload }) {
            state.items = state.items.filter(contact => contact.id !== payload)
        }
     },
})

export const { addContactAction, deleteContactsAction } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer
