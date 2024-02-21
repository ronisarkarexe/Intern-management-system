import { useEffect, useState } from "react";
import DeleteConfirmation from "../../shared-ui/delete_confirmation";
import { Button, Table, message } from "antd";
import {
  useDeleteTaskMutation,
  useGetAllTaskQuery,
} from "../../redux/features/task/taskApi";

const ViewListComponent = () => {
  const [tasks, setTasks] = useState([]);
  const { data, isLoading } = useGetAllTaskQuery();
  const [deleteTask] = useDeleteTaskMutation();
  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setTasks(data.data.data);
    }
  }, [data]);

  const handleDelete = async (id) => {
    try {
      const res = await deleteTask(id);
      if (res) {
        message.success("Salary deleted successfully!");
      }
    } catch (error) {
      message.error("An error occurred while deleting department");
    }
  };

  const columns = [
    {
      title: "Index",
      dataIndex: "",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Task Name",
      dataIndex: "taskName",
    },
    {
      title: "Intern Email",
      dataIndex: "internId",
      render: (internId) => internId?.email,
    },
    {
      title: "Department",
      dataIndex: "departmentId",
      render: (departmentId) => departmentId?.departmentName,
    },
    {
      title: "Assign Date",
      dataIndex: "assignDate",
    },
    {
      title: "Deadline Date",
      dataIndex: "deadlineDate",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <DeleteConfirmation
          id={record._id}
          title="Delete the admin"
          description="Are you sure to delete this admin?"
          onConfirm={handleDelete}
        >
          <Button danger size="small">
            Delete
          </Button>
        </DeleteConfirmation>
      ),
    },
  ];
  if (isLoading) {
    return <div>Loading...!</div>;
  }
  return (
    <div className="m-4">
      <h3 className="text-xl">Event Lists</h3>
      <Table
        columns={columns}
        dataSource={tasks}
        pagination={{
          pageSize: 50,
        }}
        scroll={{
          y: 240,
          x: 1400,
        }}
      />
    </div>
  );
};

export default ViewListComponent;
