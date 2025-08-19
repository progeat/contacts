import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, GROUP_CONTACTS_URL } from 'src/constants/env';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const groupContactsApi = createApi({
  reducerPath: 'groupContactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getGroupContacts: builder.query<GroupContactsDto[], void>({
      query: () => GROUP_CONTACTS_URL,
    }),
  }),
});

export const { useGetGroupContactsQuery } = groupContactsApi;
