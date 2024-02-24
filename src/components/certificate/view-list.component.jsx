import { Button, Table, message } from "antd";
import DeleteConfirmation from "../../shared-ui/delete_confirmation";
import {
  useDeleteCertificateMutation,
  useGetAllCertificatesQuery,
} from "../../redux/features/certificate/certificateApi";
import { useEffect, useState } from "react";
import LoadingComponent from "../../shared-ui/loading";

const ViewListComponent = () => {
  const [certificates, setCertificates] = useState([]);
  const { data, isLoading } = useGetAllCertificatesQuery();
  const [deleteCertificate] = useDeleteCertificateMutation();
  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setCertificates(data.data.data);
    }
  }, [data]);

  const handleDelete = async (id) => {
    try {
      const res = await deleteCertificate(id);
      if (res) {
        message.success("Certificate deleted successfully!");
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
      title: "Certificate Name",
      dataIndex: "certificateName",
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
      title: "Issue Date",
      dataIndex: "issueDate",
    },
    {
      title: "Certificate Image",
      dataIndex: "certificateImage",
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
      <h3 className="text-xl">Certificate Lists</h3>
      <Table
        columns={columns}
        dataSource={certificates}
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
