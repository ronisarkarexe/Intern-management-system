/* eslint-disable react/prop-types */
import { useState } from "react";
import CollapseUi from "../../shared-ui/collapse-ui";
import CustomModal from "../../shared-ui/custome-popup-model";
import { useUpdateTaskStatusMutation } from "../../redux/features/task/taskApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StrokeTextIcon from "../../shared-ui/stroke-text-icon";

const InternTaskInProgressList = ({ data, handelStatusChange }) => {
  const [reason, setReason] = useState("");
  const [taskId, setTaskId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const filterTasksByStatus = (status) => {
    return data?.data?.tasks?.filter((task) => task?.taskId?.status === status);
  };

  const handelExtendDate = (taskId) => {
    setIsModalOpen(true);
    setTaskId(taskId);
  };

  const handleOk = async () => {
    const newData = {
      reason: reason,
      isExtendDeadlineDate: true,
    };
    const res = await updateTaskStatus({ id: taskId, data: newData });
    if (res.data) {
      setReason("");
      toast(`Applied extended date successfully!`, {
        autoClose: 2000,
        theme: "light",
        type: "success",
      });
      setIsModalOpen(false);
    } else {
      toast(`Failed to extended date!`, {
        autoClose: 2000,
        theme: "light",
        type: "error",
      });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-4">
      <CollapseUi title="IN PROGRESS LIST">
        <div className="overflow-x-auto">
          {filterTasksByStatus("IN_PROGRESS")?.length ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Task Name</th>
                  <th>Assign Date</th>
                  <th>Deadline</th>
                  <th>Statue</th>
                  <th>Extend Deadline</th>
                  <th>New Deadline</th>
                </tr>
              </thead>
              <tbody>
                {filterTasksByStatus("IN_PROGRESS")?.map((task, index) => (
                  <tr key={task.taskId._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="font-bold">{task.taskId.taskName}</div>
                    </td>
                    <td>{task.taskId.assignDate}</td>
                    <td
                      className={task.taskId.extendedDate ? "line-through" : ""}
                    >
                      {task.taskId.deadlineDate}
                    </td>
                    <td>
                      <select
                        className="select select-bordered select-sm"
                        style={{ outline: "none" }}
                        onChange={(e) => handelStatusChange(task.taskId._id, e)}
                        name="status"
                      >
                        <option>{task.taskId.status}</option>
                        <option value="DONE">DONE</option>
                      </select>
                    </td>
                    <td>
                      <button
                        className="btn btn-xs btn-outline btn-primary"
                        onClick={() => handelExtendDate(task.taskId._id)}
                        disabled={task.taskId.isExtendDeadlineDate}
                      >
                        Apply
                      </button>
                      {task.taskId.isExtendDeadlineDate && (
                        <StrokeTextIcon title="Already applied!" />
                      )}
                    </td>
                    <td>{task.taskId.extendedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="mt-3 opacity-3">
              There are no task in In Progress list!
            </div>
          )}
        </div>
      </CollapseUi>
      <CustomModal
        isOpen={isModalOpen}
        title="Extended Date"
        onOk={handleOk}
        onClose={handleCancel}
      >
        <div>
          <h1 className="text-1xl">* Why you want to extend the date?</h1>
          <textarea
            placeholder="Text..."
            className="textarea textarea-bordered textarea-sm w-full"
            style={{ outline: "none" }}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>
      </CustomModal>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default InternTaskInProgressList;
