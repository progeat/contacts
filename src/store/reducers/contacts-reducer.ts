import { ContactDto } from 'src/types/dto/ContactDto';
import { ActionType } from '../actions/action-type';
import { ContactsActionsTypes } from '../actions';

const initialState: ContactDto[] = [];

export const contactsReducer = (
  state = initialState,
  action: ContactsActionsTypes
) => {
  switch (action.type) {
    case ActionType.SET_CONTACTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
