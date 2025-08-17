import { ActionType } from '../actions/action-type';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { GroupContactsActionsTypes } from '../actions';

const initialState: GroupContactsDto[] = [];

export const groupContactsReducer = (
  state = initialState,
  action: GroupContactsActionsTypes
) => {
  switch (action.type) {
    case ActionType.SET_GROUP_CONTACTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
