import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { ProjectActions, RootState } from '../store';
import { useSelector } from 'react-redux';
import { useStore } from 'react-redux';

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, ProjectActions>
>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore<RootState>;
