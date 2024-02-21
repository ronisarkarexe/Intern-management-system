import { useEffect, useState } from "react";
import { Button, Table, message } from "antd";
import DeleteConfirmation from "../../shared-ui/delete_confirmation";
import {
  useDeleteSalaryMutation,
  useGetAllSalaryQuery,
} from "../../redux/features/salary/salaryApi";

const ViewListComponent = () => {
  const [salaries, setSalaries] = useState([]);
  const { data, isLoading } = useGetAllSalaryQuery();
  const [deleteSalary] = useDeleteSalaryMutation();
  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setSalaries(data.data.data);
    }
  }, [data]);

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
    return <div>Loading...!</div>;
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
