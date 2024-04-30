import { useEffect, useState } from "react";
import { Button, Table, message } from "antd";
import {
  useDeleteEventMutation,
  useGetAllEventsQuery,
} from "../../redux/features/event/eventApi";
import DeleteConfirmation from "../../shared-ui/delete_confirmation";
import { useGetProfileInfoQuery } from "../../redux/features/profile/profileApi";
import LoadingComponent from "../../shared-ui/loading";
import { getLocalTime } from "../../utils/time-convert";

const ViewListComponent = () => {
  const [events, setEvents] = useState([]);
  const { data, isLoading } = useGetAllEventsQuery();
  const { data: user } = useGetProfileInfoQuery();
  const [deleteEvent] = useDeleteEventMutation();
  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setEvents(data.data.data);
    }
  }, [data]);

  const handleDelete = async (id) => {
    try {
      const res = await deleteEvent(id);
      if (res) {
        message.success("Event deleted successfully!");
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
      width: "5%",
    },
    {
      title: "Event Name",
      dataIndex: "eventName",
      width: "10%",
    },
    {
      title: "Registration Link",
      dataIndex: "registrationLink",
      width: "10%",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      render: (startDate) => getLocalTime(startDate),
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      render: (endDate) => getLocalTime(endDate),
    },
    {
      title: "Status",
      dataIndex: "",
      key: "status",
      render: (record) => {
        const currentDate = new Date();
        const startDate = new Date(record.startDate);
        const endDate = new Date(record.endDate);

        if (endDate < currentDate) {
          return "In-Active";
        } else if (startDate <= currentDate && endDate >= currentDate) {
          return "Ongoing";
        } else if (startDate > currentDate) {
          return "Upcoming";
        }
      },
    },
    {
      title: "Poster",
      dataIndex: "eventImage",
    },
    // {
    //   title: "Action",
    //   dataIndex: "",
    //   key: "x",
    //   render: (record) => (
    //     <DeleteConfirmation
    //       id={record._id}
    //       title="Delete the admin"
    //       description="Are you sure to delete this admin?"
    //       onConfirm={handleDelete}
    //     >
    //       <Button danger size="small">
    //         Delete
    //       </Button>
    //     </DeleteConfirmation>
    //   ),
    // },
  ];

  if (user?.data?.role === "ADMIN") {
    columns.push({
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
    });
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="m-4">
      <h3 className="text-xl">Event Lists</h3>
      <Table
        columns={columns}
        dataSource={events}
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
