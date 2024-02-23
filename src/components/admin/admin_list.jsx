import { useEffect, useState } from "react";
import { Button, Table, message } from "antd";
import {
  useDeleteAdminMutation,
  useGetAllAdminQuery,
} from "../../redux/features/admin/adminApi";
import DeleteConfirmation from "../../shared-ui/delete_confirmation";
import LoadingComponent from "../../shared-ui/loading";

const AdminListComponent = () => {
  const [allAdmins, setAllAdmins] = useState([]);
  const { data, isLoading } = useGetAllAdminQuery(undefined);
  const [deleteAdmin] = useDeleteAdminMutation();
  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setAllAdmins(data.data.data);
    }
  }, [data]);

  const handleDelete = async (id) => {
    try {
      const res = await deleteAdmin(id);
      if (res) {
        message.success(res.data);
      }
    } catch (error) {
      message.error("An error occurred while deleting department");
    }
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  const columns = [
    {
      title: "Index",
      dataIndex: "",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Intern Access",
      dataIndex: "departmentId",
      render: (departmentId) =>
        departmentId?.internDetails.length ? "Yes" : "No",
    },
    {
      title: "Department",
      dataIndex: "departmentId",
      render: (departmentId) => departmentId?.departmentName,
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

  return (
    <div className="m-4">
      <h3 className="text-xl">Admin Lists</h3>
      <Table
        columns={columns}
        dataSource={allAdmins}
        pagination={{
          pageSize: 50,
        }}
        scroll={{
          y: 240,
        }}
      />
    </div>
  );
};

export default AdminListComponent;
