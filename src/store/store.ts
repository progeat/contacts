import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux';
import { thunk } from 'redux-thunk';
import {
  ContactsActionsTypes,
  FavoriteContactsActionsTypes,
  GroupContactsActionsTypes,
} from './actions';
import {
  contactsReducer,
  favoriteContactsReducer,
  groupContactsReducer,
} from './reducers';

export type ProjectActions =
  | ContactsActionsTypes
  | GroupContactsActionsTypes
  | FavoriteContactsActionsTypes;

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupContactsReducer,
  favorite: favoriteContactsReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<RootState, ProjectActions> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
