/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

const isAuthenticated = () => {
  localStorage.getItem("accessToken") ? true : false;
};

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
