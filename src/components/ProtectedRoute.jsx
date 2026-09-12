import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ allowedRole = 'admin' }) {
  const { user, getToken, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // or a spinner component

  if (!getToken() && user.role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
