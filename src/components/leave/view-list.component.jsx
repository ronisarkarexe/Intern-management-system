import { useEffect, useState } from "react";
import { Button, Select, Table, message } from "antd";
import DeleteConfirmation from "../../shared-ui/delete_confirmation";
import {
  useDeleteLeaveMutation,
  useGetAllLeaveQuery,
  useUpdateLeaveMutation,
} from "../../redux/features/leave/leaveApi";
import { useGetProfileInfoQuery } from "../../redux/features/profile/profileApi";
const { Option } = Select;

const ViewListComponent = () => {
  const [leaves, setLeaves] = useState([]);
  const { data, isLoading } = useGetAllLeaveQuery();
  const { data: user } = useGetProfileInfoQuery();
  const [deleteLeave] = useDeleteLeaveMutation();
  const [updateLeave] = useUpdateLeaveMutation();
  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setLeaves(data.data.data);
    }
  }, [data]);

  const handleDelete = async (id) => {
    try {
      const res = await deleteLeave(id);
      if (res) {
        message.success("Event deleted successfully!");
      }
    } catch (error) {
      message.error("An error occurred while deleting department");
    }
  };

  const handleStatusChange = async (id, value) => {
    const newDate = {
      status: value,
    };
    const res = await updateLeave({ id, data: newDate });
    if (res.data) {
      message.success("Leave updated successfully!");
    } else {
      message.error("Leave can not updated successfully!");
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
      title: "Reason",
      dataIndex: "reason",
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
      title: "Status",
      dataIndex: "status",
      render: (status, record) => (
        <Select
          defaultValue={status}
          onChange={(value) => handleStatusChange(record._id, value)}
        >
          <Option value="Pending">Pending</Option>
          <Option value="Approved">Approved</Option>
          <Option value="Rejected">Rejected</Option>
        </Select>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Applied Date",
      dataIndex: "createdAt",
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
          <Button
            danger
            size="small"
            disabled={
              (record.status === "Approved" || record.status === "Rejected") &&
              user?.data?.role === "INTERN"
            }
          >
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
      <h3 className="text-xl mb-4">Leave Lists</h3>
      <Table
        columns={columns}
        dataSource={leaves}
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
