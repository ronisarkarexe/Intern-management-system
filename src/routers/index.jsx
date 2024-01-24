import { createBrowserRouter } from "react-router-dom";
import AddAdmin from "../pages/AddAdmin";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
