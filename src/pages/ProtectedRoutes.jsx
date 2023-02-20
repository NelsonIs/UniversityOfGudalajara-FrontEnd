import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes({ children }) {
  if (!localStorage.getItem("sessionToken")) {
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
}
