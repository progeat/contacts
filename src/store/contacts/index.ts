import { contactsApi } from './slice';

export const contactsReducer = contactsApi.reducer;
export const contactsReducerPath = contactsApi.reducerPath;

export const { useGetContactsQuery } = contactsApi;
