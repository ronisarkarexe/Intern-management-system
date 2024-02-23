/* eslint-disable react/prop-types */
import CollapseUi from "../../shared-ui/collapse-ui";

const InternTaskDoneList = ({ data }) => {
  const filterTasksByStatus = (status) => {
    return data?.data?.tasks?.filter((task) => task?.taskId?.status === status);
  };
  return (
    <div className="mt-4">
      <CollapseUi title="DONE LIST">
        <div className="overflow-x-auto">
          {filterTasksByStatus("DONE")?.length ? (
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
                {filterTasksByStatus("DONE")?.map((task, index) => (
                  <tr key={task.taskId._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="font-bold">{task.taskId.taskName}</div>
                    </td>
                    <td>{task.taskId.assignDate}</td>
                    <td>{task.taskId.deadlineDate}</td>
                    <td>{task.taskId.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="mt-3 opacity-3">
              There are no task in Done list!
            </div>
          )}
        </div>
      </CollapseUi>
    </div>
  );
};

export default InternTaskDoneList;
