import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute() {
    const { isLoggedIn } = useAuth();
    if (isLoggedIn()) return <Outlet />
    else return <Navigate to="/categories" />
}
