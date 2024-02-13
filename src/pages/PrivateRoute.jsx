/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { token } from "../redux/utils";

const isAuthenticated = () => {
  try {
    if (token) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return children;
};

export default PrivateRoute;
