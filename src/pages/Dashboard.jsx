import DepartmentAdminHeader from "../components/dashboard/dashboard_admin_header";
import DashboardAdminList from "../components/dashboard/dashboard_admin_list";
import DashboardHeader from "../components/dashboard/dashboard_department";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <DepartmentAdminHeader />
      <DashboardAdminList />
    </>
  );
};

export default Dashboard;
