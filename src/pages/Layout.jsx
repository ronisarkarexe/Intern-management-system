import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Menu Bar
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li>
            <Link to="/">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <a>Add Admin</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
