import { Link, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

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
            <Link to="/add-department">
              <a>Add Department</a>
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <a>Add Admin</a>
            </Link>
          </li>

          <div className="mt-auto">
            <div className="flex justify-evenly">
              <div className="cursor-pointer">
                <Link to="/user-profile">
                  <CgProfile fontSize={40} />
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link>
                  <h3 className="text-2xl">LogOut</h3>
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
