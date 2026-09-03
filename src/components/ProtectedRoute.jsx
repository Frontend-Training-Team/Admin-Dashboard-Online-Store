import { Navigate, Outlet } from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

{/*Decides whether or not the user is supposed to view the pages and where to direct them*/}
export default function ProtectedRoute({ allowedRole = 'admin' }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // or a spinner component

  if (!user) return <Navigate to="/login" replace />;

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // renders whichever child route matched
}