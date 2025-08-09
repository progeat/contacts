import { ActionType } from './action-type';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto';

export interface SetFavoriteContacts {
  type: typeof ActionType.SET_FAVORITE_CONTACTS;
  payload: FavoriteContactsDto[];
}

type FavoriteContactsThunk<Return = void> = ThunkAction<
  Return,
  RootState,
  unknown,
  SetFavoriteContacts
>;

export type FavoriteContactsActionsTypes = SetFavoriteContacts;

export const setFavoriteContacts = (
  favoriteContacts: FavoriteContactsDto[]
): SetFavoriteContacts => ({
  type: ActionType.SET_FAVORITE_CONTACTS,
  payload: favoriteContacts,
});

export const loadFavoriteContactsAsync =
  (): FavoriteContactsThunk => async (dispatch) => {
    try {
      const response = await fetch(
        'https://mocki.io/v1/01753076-e9b4-4a05-8590-f1735511a4c9'
      );

      const data = await response.json();

      dispatch(setFavoriteContacts(data));
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };
