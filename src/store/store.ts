import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, contactsReducerPath } from './contacts';
import { contactsApi } from './contacts/slice';
import { groupContactsReducer, groupContactsReducerPath } from './groups';
import {
  favoriteContactsReducer,
  favoriteContactsReducerPath,
} from './favorite';
import { groupContactsApi } from './groups/slice';
import { favoriteContactsApi } from './favorite/slice';

const rootReducer = combineReducers({
  [contactsReducerPath]: contactsReducer,
  [groupContactsReducerPath]: groupContactsReducer,
  [favoriteContactsReducerPath]: favoriteContactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(contactsApi.middleware)
      .concat(groupContactsApi.middleware)
      .concat(favoriteContactsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
