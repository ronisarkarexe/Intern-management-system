import { message } from "antd";
import { useGetProfileInfoQuery } from "../../redux/features/profile/profileApi";
import { useUpdateTaskStatusMutation } from "../../redux/features/task/taskApi";
import InternTaskDoneList from "./intern-task-done-list";
import InternTaskInProgressList from "./intern-task-in-progress-list";
import TaskTodoList from "./intern-task-todo-list";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InternTaskList = () => {
  const { data } = useGetProfileInfoQuery(undefined);
  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const handelStatusChange = async (taskId, e) => {
    const changeStatus = {
      [e.target.name]: e.target.value,
    };
    const res = await updateTaskStatus({ id: taskId, data: changeStatus });
    if (res.data) {
      message.success(`Task status change to ${e.target.value}`);
      // toast(`Task status change to ${e.target.value}`, {
      //   autoClose: 2000,
      //   theme: "light",
      //   type: "success",
      // });
    } else {
      message.error(`Failed to change status change to ${e.target.value}`);
      // toast(`Failed to change status change to ${e.target.value}`, {
      //   autoClose: 2000,
      //   theme: "light",
      //   type: "error",
      // });
    }
  };
  return (
    <div className="mt-4">
      <TaskTodoList data={data} handelStatusChange={handelStatusChange} />
      <InternTaskInProgressList
        data={data}
        handelStatusChange={handelStatusChange}
      />
      <InternTaskDoneList data={data} />
      <ToastContainer position="top-right" />
    </div>
  );
};

export default InternTaskList;
