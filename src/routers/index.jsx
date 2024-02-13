import { createBrowserRouter } from "react-router-dom";
import AddAdmin from "../pages/AddAdmin";
import Dashboard from "../pages/Dashboard";
import HomeLayout from "../pages/HomeLayout";
import ProfileComponent from "../shared/Profile.Component";
import Department from "../components/department/department";
import Login from "../pages/Login";
import PrivateRoute from "../pages/PrivateRoute";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/department",
        element: <Department />,
      },
      {
        path: "/admin",
        element: <AddAdmin />,
      },
      {
        path: "/user-profile",
        element: <ProfileComponent />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
