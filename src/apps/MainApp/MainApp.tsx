import { useEffect } from 'react';
import './MainApp.scss';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from 'src/store/hooks';
import {
  loadContactsAsync,
  loadFavoriteContactsAsync,
  loadGroupContactsAsync,
} from 'src/store/actions';
import { AppRouter } from 'src/router';

export const MainApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadContactsAsync());
    dispatch(loadGroupContactsAsync());
    dispatch(loadFavoriteContactsAsync());
  }, [dispatch]);

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};
