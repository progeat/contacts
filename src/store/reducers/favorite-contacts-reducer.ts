import { ActionType } from '../actions/action-type';
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto';
import { FavoriteContactsActionsTypes } from '../actions';

const initialState: FavoriteContactsDto[] = [];

export const favoriteContactsReducer = (
  state = initialState,
  action: FavoriteContactsActionsTypes
) => {
  switch (action.type) {
    case ActionType.SET_FAVORITE_CONTACTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
