import { useEffect, useState } from "react";
import DeleteConfirmation from "../../shared-ui/delete_confirmation";
import { Button, Col, DatePicker, Form, Table, message } from "antd";
import {
  useDeleteTaskMutation,
  useGetAllTaskQuery,
  useUpdateTaskStatusMutation,
} from "../../redux/features/task/taskApi";
import CustomModal from "../../shared-ui/custome-popup-model";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

const ViewListComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [dateline, setDateline] = useState("");
  const { data, isLoading } = useGetAllTaskQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [form] = Form.useForm();
  const [updateTaskStatus] = useUpdateTaskStatusMutation();
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setTasks(data.data.data);
    }
  }, [data]);

  const onFinish = async (values) => {
    console.log("onFinish", values);
  };

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

  const handelChangeView = (item) => {
    setIsModalOpen(true);
    setTaskId(item?._id);
    setReason(item?.reason);
    setDateline(item?.deadlineDate);
  };

  const handleOk = async () => {
    const formattedValues = {
      extendedDate: moment(selectedDate.extendedDate).format("YYYY-MM-DD"),
    };
    const res = await updateTaskStatus({
      id: taskId,
      data: selectedDate.extendedDate,
    });
    if (res?.data) {
      toast(`Extended date successfully.!`, {
        autoClose: 1000,
        theme: "light",
        type: "success",
      });
    } else {
      toast(`Failed to extend date.!`, {
        autoClose: 1000,
        theme: "light",
        type: "error",
      });
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
    {
      title: "Extended deadline request",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <div>
          {record?.isExtendDeadlineDate && (
            <Button
              primary
              size="small"
              onClick={() => handelChangeView(record)}
              disabled={record.extendedDate}
            >
              View
            </Button>
          )}
        </div>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading...!</div>;
  }
  return (
    <div className="m-4">
      <h3 className="text-xl">Task Lists</h3>
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
      <CustomModal
        isOpen={isModalOpen}
        title="Extended Date"
        onOk={handleOk}
        onClose={handleCancel}
      >
        <div>
          <h1 className="text-1xl">Reason.</h1>
          <textarea
            placeholder="Text..."
            className="textarea textarea-bordered textarea-sm w-full"
            style={{ outline: "none" }}
            value={reason}
          ></textarea>
          <h1>Previous dateline for task: {dateline}</h1>
          <Form
            layout="vertical"
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Col span={12}>
              <Form.Item
                name="extendedDate"
                label="Extended Date"
                rules={[
                  {
                    required: true,
                    message: "Please enter assign date",
                    type: "date",
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: "100%",
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                  onChange={(date) => setSelectedDate(date)}
                />
              </Form.Item>
            </Col>
          </Form>
        </div>
      </CustomModal>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default ViewListComponent;
