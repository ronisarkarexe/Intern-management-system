import { Link, Outlet, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { deleteAccessTokenFromState } from "../redux/features/auth/authSlice";
import { Button } from "antd";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelLogOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
    dispatch(deleteAccessTokenFromState());
  };

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
        <ul className="menu p-4 pb-1 w-80 min-h-full bg-base-200 text-base-content">
          <li>
            <Link to="/">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link to="/department">
              <a>Department</a>
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <a>Add Admin</a>
            </Link>
          </li>

          <div className="mt-auto bg-green-200 py-1 rounded">
            <div className="flex justify-evenly">
              <div className="cursor-pointer">
                <Link to="/user-profile">
                  <CgProfile
                    fontSize={30}
                    style={{
                      borderColor: "#1890ff",
                      color: "#1890ff",
                    }}
                  />
                </Link>
              </div>
              <div className="cursor-pointer">
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#1890ff",
                    borderColor: "#1890ff",
                    color: "#fff",
                  }}
                  onClick={handelLogOut}
                >
                  LogOut
                </Button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
