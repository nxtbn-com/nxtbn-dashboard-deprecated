import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/rootReducer';

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.isLoggedIn);

  return isAuthenticated ? <Outlet /> : <Navigate to="/dashboard/login" />;
};

export default PrivateRoute;
