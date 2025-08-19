import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux';
import { thunk } from 'redux-thunk';
import {
  ContactsActionsTypes,
  FavoriteContactsActionsTypes,
  GroupContactsActionsTypes,
} from './actions';
import {
  contactsReducer,
  favoriteContactsReducer,
  groupContactsReducer,
} from './reducers';
import { contactsReducerPath } from './contacts';
import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/slice';

const rootReducer = combineReducers({
  [contactsReducerPath]: contactsReducer,
  // groups: groupContactsReducer,
  // favorite: favoriteContactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
