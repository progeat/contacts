import { Routes, Route } from 'react-router-dom';
import { FC } from 'react';
import { Layout } from 'src/components/Layout';
import {
  ContactListPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
  GroupPage,
} from 'src/pages';
import { AppRoutes } from 'src/constants/app-routes';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<Layout />}>
        <Route index element={<ContactListPage />} />
        <Route path={AppRoutes.CONTACT}>
          <Route index element={<ContactListPage />} />
          <Route path={AppRoutes.CONTACT_ID} element={<ContactPage />} />
        </Route>
        <Route path={AppRoutes.GROUPS}>
          <Route index element={<GroupListPage />} />
          <Route path={AppRoutes.GROUP_ID} element={<GroupPage />} />
        </Route>
        <Route path={AppRoutes.FAVORITE} element={<FavoritListPage />} />
      </Route>
    </Routes>
  );
};
