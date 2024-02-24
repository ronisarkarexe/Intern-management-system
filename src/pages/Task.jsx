import AddTask from "../components/task/add-task";
import ViewListComponent from "../components/task/view-list.component";
import InternTaskDetails from "../components/task/intern-task-details";
import InternTaskDashboard from "../components/task/intern-task-dashboard";
import { useGetProfileInfoQuery } from "../redux/features/profile/profileApi";

const Task = () => {
  const { data } = useGetProfileInfoQuery();
  return (
    <>
      {data?.data?.role === "ADMIN" && (
        <>
          <AddTask />
          <ViewListComponent />
        </>
      )}
      {data?.data?.role === "INTERN" && (
        <>
          <InternTaskDashboard />
          <InternTaskDetails />
        </>
      )}
    </>
  );
};

export default Task;
