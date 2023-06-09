import { Suspense, lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';


import { RestrictedRoute } from '../components/RestrictedRoute';
import { PrivateRoute } from '../components/PrivateRoute';

import Loader from 'components/Loader/loader';
import { ToastContainer } from 'react-toastify';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('../pages/OurFriendsPage/OurFriendsPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage/AddPetPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices/:categoryName" element={<NoticesPage />} />
              <Route path="add-pet" element={
              <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
            }/>
            <Route path="friends" element={<OurFriendsPage />} />
            <Route path="login" element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
            } />
            <Route path="register" element={
              <RestrictedRoute redirectTo="/user" component={<RegisterPage />} />
            } />
              <Route path="user" element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }  />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      )}
      <ToastContainer />
    </Suspense>
  );
};