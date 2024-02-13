import { createBrowserRouter } from "react-router-dom";
import AddAdmin from "../pages/AddAdmin";
import Dashboard from "../pages/Dashboard";
import HomeLayout from "../pages/HomeLayout";
import ProfileComponent from "../shared/Profile.Component";
import Department from "../components/department/department";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
]);

export default router;
