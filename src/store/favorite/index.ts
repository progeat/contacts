import { favoriteContactsApi } from './slice';

export const favoriteContactsReducer = favoriteContactsApi.reducer;
export const favoriteContactsReducerPath = favoriteContactsApi.reducerPath;

export const { useGetFavoriteContactsQuery } = favoriteContactsApi;
