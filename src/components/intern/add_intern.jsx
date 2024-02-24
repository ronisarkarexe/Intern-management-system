import { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
// import moment from "moment";
import { useGetAllDepartmentsQuery } from "../../redux/features/department/departmentApi";
import { useCreateInternMutation } from "../../redux/features/intern/internApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Option } = Select;

const AdminListComponent = () => {
  const [departments, setDepartments] = useState([]);
  const { data, isLoading } = useGetAllDepartmentsQuery(undefined);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [createIntern] = useCreateInternMutation();

  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setDepartments(data.data.data);
    }
  }, [data]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = async (values) => {
    // const formattedValues = {
    //   ...values,
    //   joinDate: moment(values.joinDate).format("YYYY-MM-DD"),
    //   endDate: moment(values.endDate).format("YYYY-MM-DD"),
    // };
    const res = await createIntern(values);
    if (res) {
      toast(`Intern created successfully.!`, {
        autoClose: 1000,
        theme: "light",
        type: "success",
      });
    }
    onClose();
    form.resetFields();
  };

  if (isLoading) {
    return <div>Loading...!</div>;
  }

  return (
    <div className="m-4">
      <Button
        type="primary"
        style={{
          backgroundColor: "#1890ff",
          borderColor: "#1890ff",
          color: "#fff",
        }}
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
        Add Intern
      </Button>
      <Drawer
        title="Add Intern"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              onClick={() => form.submit()}
              type="primary"
              style={{
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
                color: "#fff",
              }}
            >
              Add
            </Button>
          </Space>
        }
      >
        <Form
          layout="vertical"
          form={form}
          name="control-hooks"
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter user first name",
                  },
                ]}
              >
                <Input placeholder="Please enter user first name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter user last name",
                  },
                ]}
              >
                <Input placeholder="Please enter user last name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  {
                    required: true,
                    message: "Please enter user email",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Please enter user email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
              >
                <Input placeholder="Please enter your password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: "Please select an owner",
                  },
                ]}
              >
                <Select placeholder="Please select an gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="contact"
                label="Contact No."
                rules={[
                  {
                    required: true,
                    message: "Please enter your contact no",
                  },
                ]}
              >
                <Input placeholder="Please enter your contact no" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="joinDate"
                label="Join Date"
                rules={[
                  {
                    required: true,
                    message: "Please choose the type",
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
                name="endDate"
                label="End Date"
                rules={[
                  {
                    required: true,
                    message: "Please end date",
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
                name="city"
                label="City"
                rules={[
                  {
                    required: true,
                    message: "Please enter your city",
                  },
                ]}
              >
                <Input placeholder="Please enter your city" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="collageName"
                label="Collage Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your collage name",
                  },
                ]}
              >
                <Input placeholder="Please enter your collage name" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AdminListComponent;
