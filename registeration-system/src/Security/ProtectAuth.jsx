import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectAuth = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('user');
  return isAuthenticated ? element : <Navigate to="/user/login" />;
};

export default ProtectAuth;
