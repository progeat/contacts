import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, CONTACTS_URL } from 'src/constants/env';
import { ContactDto } from 'src/types/dto/ContactDto';

export const favoriteContactsApi = createApi({
  reducerPath: 'favoriteContactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getFavoriteContacts: builder.query<string[], void>({
      query: () => CONTACTS_URL,
      transformResponse: (response: ContactDto[]) =>
        response.slice(0, 4).map((contact) => contact.id),
    }),
  }),
});

export const { useGetFavoriteContactsQuery } = favoriteContactsApi;
