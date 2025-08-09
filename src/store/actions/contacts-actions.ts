import { ActionType } from './action-type';
import { ContactDto } from 'src/types/dto/ContactDto';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export interface SetContacts {
  type: typeof ActionType.SET_CONTACTS;
  payload: ContactDto[];
}

type ContactsThunk<Return = void> = ThunkAction<
  Return,
  RootState,
  unknown,
  SetContacts
>;

export type ContactsActionsTypes = SetContacts;

export const setContacts = (contacts: ContactDto[]): SetContacts => ({
  type: ActionType.SET_CONTACTS,
  payload: contacts,
});

export const loadContactsAsync = (): ContactsThunk => async (dispatch) => {
  try {
    const response = await fetch(
      'https://mocki.io/v1/22cfb4fe-6014-4f99-9908-cb0b1a5c3752'
    );

    const data = await response.json();

    dispatch(setContacts(data));
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
