import { ActionType } from './action-type';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export interface SetGroupContacts {
  type: typeof ActionType.SET_GROUP_CONTACTS;
  payload: GroupContactsDto[];
}

type GroupContactsThunk<Return = void> = ThunkAction<
  Return,
  RootState,
  unknown,
  SetGroupContacts
>;

export type GroupContactsActionsTypes = SetGroupContacts;

export const setGroupContacts = (
  groupContacts: GroupContactsDto[]
): SetGroupContacts => ({
  type: ActionType.SET_GROUP_CONTACTS,
  payload: groupContacts,
});

export const loadGroupContactsAsync =
  (): GroupContactsThunk => async (dispatch) => {
    try {
      const response = await fetch(
        'https://mocki.io/v1/44824d12-004c-4e25-8e86-26dd644db4f9'
      );

      const data = await response.json();

      dispatch(setGroupContacts(data));
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };
