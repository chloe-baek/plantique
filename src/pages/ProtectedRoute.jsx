import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useUserContext();
  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace={true} />;
  }

  return children;
}
