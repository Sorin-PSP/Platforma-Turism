import React from 'react';
import { Navigate } from 'react-router-dom';
import { isUserAuthenticated } from '../services/authService';
import AdminLayout from './AdminLayout';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = isUserAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return <AdminLayout>{children}</AdminLayout>;
};

export default ProtectedRoute;
