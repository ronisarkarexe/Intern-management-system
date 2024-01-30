import { createBrowserRouter } from "react-router-dom";
import AddAdmin from "../pages/AddAdmin";
import Dashboard from "../pages/Dashboard";
import HomeLayout from "../pages/HomeLayout";

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
        path: "/admin",
        element: <AddAdmin />,
      },
    ],
  },
]);

export default router;
