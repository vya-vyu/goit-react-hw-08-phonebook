import { Routes, Route, Navigate } from 'react-router';
import ContactsPage from 'pages/ContactsPage';

import RegisterPage from 'pages/RegistrePage';
import LoginPage from 'pages/LoginPage';
import { selectIsAuth } from 'redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/Auth/authOperation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/contacts" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
};
