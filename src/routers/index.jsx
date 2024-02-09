import { createBrowserRouter } from "react-router-dom";
import AddAdmin from "../pages/AddAdmin";
import Dashboard from "../pages/Dashboard";
import HomeLayout from "../pages/HomeLayout";
import ProfileComponent from "../shared/Profile.Component";
import AddDepartment from "../components/dashboard/add_department";

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
        path: "/add-department",
        element: <AddDepartment />,
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
]);

export default router;
