import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, CONTACTS_URL } from 'src/constants/env';
import { ContactDto } from 'src/types/dto/ContactDto';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getContacts: builder.query<ContactDto[], void>({
      query: () => CONTACTS_URL,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
