/* eslint-disable react/prop-types */
import CollapseUi from "../../shared-ui/collapse-ui";

const TaskTodoList = ({ data, handelStatusChange }) => {
  const filterTasksByStatus = (status) => {
    return data?.data?.tasks?.filter((task) => task?.taskId?.status === status);
  };

  return (
    <CollapseUi title="TODO LIST">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Task Name</th>
              <th>Assign Date</th>
              <th>Deadline</th>
              <th>Statue</th>
            </tr>
          </thead>
          <tbody>
            {filterTasksByStatus("TODO")?.map((task, index) => (
              <tr key={task.taskId._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="font-bold">{task.taskId.taskName}</div>
                </td>
                <td>{task.taskId.assignDate}</td>
                <td>{task.taskId.deadlineDate}</td>
                <td>
                  <select
                    className="select select-bordered select-sm"
                    style={{ outline: "none" }}
                    onChange={(e) => handelStatusChange(task.taskId._id, e)}
                    name="status"
                  >
                    <option>{task.taskId.status}</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CollapseUi>
  );
};

export default TaskTodoList;
