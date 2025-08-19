import { groupContactsApi } from './slice';

export const groupContactsReducer = groupContactsApi.reducer;
export const groupContactsReducerPath = groupContactsApi.reducerPath;

export const { useGetGroupContactsQuery } = groupContactsApi;
