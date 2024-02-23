import { useEffect, useState } from "react";
import { Button, Select, Table, message } from "antd";
import DeleteConfirmation from "../../shared-ui/delete_confirmation";
import {
  useDeleteSalaryMutation,
  useGetAllSalaryQuery,
  useUpdateSalaryMutation,
} from "../../redux/features/salary/salaryApi";
import LoadingComponent from "../../shared-ui/loading";

const { Option } = Select;
const ViewListComponent = () => {
  const [salaries, setSalaries] = useState([]);
  const { data, isLoading } = useGetAllSalaryQuery();
  const [deleteSalary] = useDeleteSalaryMutation();
  const [updateSalary] = useUpdateSalaryMutation();

  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setSalaries(data.data.data);
    }
  }, [data]);

  const handleStatusChange = async (id, value) => {
    const newData = {
      status: value,
    };
    const res = await updateSalary({ id, data: newData });
    if (res.data) {
      message.success("Salary updated successfully!");
    } else {
      message.error("Salary can not updated successfully!");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteSalary(id);
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
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, record) => (
        <Select
          defaultValue={status}
          onChange={(value) => handleStatusChange(record._id, value)}
        >
          <Option value="PENDING">Pending</Option>
          <Option value="ONGOING">Ongoing</Option>
          <Option value="DONE">Done</Option>
        </Select>
      ),
    },
    {
      title: "Month",
      dataIndex: "month",
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
    return <LoadingComponent />;
  }
  return (
    <div className="m-4">
      <h3 className="text-xl">Salary Lists</h3>
      <Table
        columns={columns}
        dataSource={salaries}
        pagination={{
          pageSize: 50,
        }}
        scroll={{
          y: 240,
          x: 1200,
        }}
      />
    </div>
  );
};

export default ViewListComponent;
