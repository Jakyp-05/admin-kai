import { useAppSelector } from "app/store";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PretectedRoute: React.FC = () => {
  const token = useAppSelector((state) => state.login.login.token);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PretectedRoute;
