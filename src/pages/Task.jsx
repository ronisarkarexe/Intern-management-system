import { useSelector } from "react-redux";
import AddTask from "../components/task/add-task";
import ViewListComponent from "../components/task/view-list.component";

const Task = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      {user?.role === "ADMIN" && <AddTask />}
      <ViewListComponent />
    </>
  );
};

export default Task;
