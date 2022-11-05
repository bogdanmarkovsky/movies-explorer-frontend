import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  return (
    !isLoggedIn ?
      <Navigate to='/' /> :
      children
  )
}

export default ProtectedRoute;
