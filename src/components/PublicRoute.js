import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const isLoggedIn = useAuth();

  return !isLoggedIn ? children : <Navigate to="/inbox" />;
}
