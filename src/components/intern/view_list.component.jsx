import { useEffect, useState } from "react";
import { useGetAllInternsQuery } from "../../redux/features/intern/internApi";
import { Button, Table } from "antd";
import DeleteConfirmation from "../../shared-ui/delete_confirmation";

const ViewListComponent = () => {
  const [interns, setInterns] = useState([]);
  const { data, isLoading } = useGetAllInternsQuery();

  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setInterns(data.data.data);
    }
  }, [data]);

  console.log(interns);

  const handleDelete = () => {
    //
  };

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

  if (isLoading) {
    return <div>Loading...!</div>;
  }

  return (
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
        }}
      />
    </div>
  );
};

export default ViewListComponent;
