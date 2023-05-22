import {legacy_createStore} from "redux"
import { contactsReducer } from "./contacts/contacts.reducer"

export const store = legacy_createStore(contactsReducer)

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch