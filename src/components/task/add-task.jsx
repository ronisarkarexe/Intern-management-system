import { useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Select, DatePicker } from "antd";
import { useCreateTaskMutation } from "../../redux/features/task/taskApi";
import { useGetAllInternsQuery } from "../../redux/features/intern/internApi";
import { useGetAllDepartmentsQuery } from "../../redux/features/department/departmentApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
const { Option } = Select;

const AddTask = () => {
  const [departments, setDepartments] = useState([]);
  const [interns, setInterns] = useState([]);
  const { data, isLoading } = useGetAllDepartmentsQuery(undefined);
  const { data: internData } = useGetAllInternsQuery();
  const [createTask] = useCreateTaskMutation();
  const [form] = Form.useForm();

  useEffect(() => {
    if (internData && Array.isArray(internData.data.data)) {
      setInterns(internData.data.data);
    }
  }, [internData]);

  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setDepartments(data.data.data);
    }
  }, [data]);

  const onFinish = async (values) => {
    const formattedValues = {
      ...values,
      assignDate: moment(values.assignDate).format("YYYY-MM-DD"),
      deadlineDate: moment(values.deadlineDate).format("YYYY-MM-DD"),
    };
    const res = await createTask(values);
    if (res?.data) {
      toast(`Task added successfully.!`, {
        autoClose: 1000,
        theme: "light",
        type: "success",
      });
    } else {
      toast(`Failed to create task.!`, {
        autoClose: 1000,
        theme: "light",
        type: "error",
      });
    }
    form.resetFields();
  };

  if (isLoading) {
    return <div>Loading...!</div>;
  }

  return (
    <div className="m-4" style={{ width: "60%" }}>
      <Form
        layout="vertical"
        form={form}
        name="control-hooks"
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="internId"
              label="Intern Email"
              rules={[
                {
                  required: true,
                  message: "Select Intern Email",
                },
              ]}
            >
              <Select placeholder="Select department">
                {interns.map((intern) => (
                  <Option key={intern._id} value={intern._id}>
                    {`${intern.email} Dpt: (${intern?.departmentId?.departmentName})`}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="departmentId"
              label="Department"
              rules={[
                {
                  required: true,
                  message: "Select department",
                },
              ]}
            >
              <Select placeholder="Select department">
                {departments.map((department) => (
                  <Option key={department._id} value={department._id}>
                    {department.departmentName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="taskName"
              label="Task Name"
              rules={[
                {
                  required: true,
                  message: "Please enter task name",
                },
              ]}
            >
              <Input placeholder="Please enter task name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="assignDate"
              label="Assign Date"
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
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="deadlineDate"
              label="Deadline Date"
              rules={[
                {
                  required: true,
                  message: "Please end deadline date",
                  type: "date",
                },
              ]}
            >
              <DatePicker
                style={{
                  width: "100%",
                }}
                getPopupContainer={(trigger) => trigger.parentElement}
              />
            </Form.Item>
          </Col>
        </Row>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            backgroundColor: "#1890ff",
            borderColor: "#1890ff",
            color: "#fff",
          }}
        >
          Add Task
        </Button>
      </Form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AddTask;
