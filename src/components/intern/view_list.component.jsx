import { useEffect, useState } from "react";
import {
  useDeleteInternMutation,
  useGetAllInternsQuery,
} from "../../redux/features/intern/internApi";
import { Button, Table, message } from "antd";
import DeleteConfirmation from "../../shared-ui/delete_confirmation";

const ViewListComponent = () => {
  const [interns, setInterns] = useState([]);
  const { data, isLoading } = useGetAllInternsQuery();
  const [deleteIntern] = useDeleteInternMutation();

  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setInterns(data.data.data);
    }
  }, [data]);

  const handleDelete = async (id) => {
    try {
      const res = await deleteIntern(id);
      if (res) {
        message.success(res.data);
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
      title: "FirstName",
      dataIndex: "firstName",
    },
    {
      title: "LastName",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Contact",
      dataIndex: "contact",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Collage Name",
      dataIndex: "collageName",
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
    <div>
      <div className="m-4">
        <h3 className="text-xl">Intern Lists</h3>
        <Table
          columns={columns}
          dataSource={interns}
          pagination={{
            pageSize: 50,
          }}
          scroll={{
            y: 240,
            x: 1900,
          }}
        />
      </div>
    </div>
  );
};

export default ViewListComponent;
