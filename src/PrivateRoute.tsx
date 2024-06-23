import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { RootState } from './redux/rootReducer';
import { login } from "./redux/authSlice";
import { AxiosResponse } from "axios";
import useApi from "./api";

import { deleteAllCookies } from './utils';


const PrivateRoute = () => {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const api = useApi();
  const navigate = useNavigate();


  const refreshAccessToken = async () => {
    const payload = {"refresh_token": Cookies.get('refreshToken')}
    api.refreshToken(payload).then((response: AxiosResponse<any>) => {
      const loginResponse = response as unknown as any; // Cast response to any
      dispatch(login(loginResponse));
    }).catch((error) => {
      deleteAllCookies();
      navigate('/dashboard/login');
    });

  };
 
  
  

  useEffect(() => {
    refreshAccessToken();

    // Set up interval to refresh the token every 29 minutes
    const interval = setInterval(() => {
      refreshAccessToken();
    }, 29 * 60 * 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to="/dashboard/login" />;
};

export default PrivateRoute;
