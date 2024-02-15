import { useState } from "react";
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
import moment from "moment";

const { Option } = Select;

const AdminListComponent = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      joinDate: moment(values.joinDate).format("YYYY-MM-DD"),
      endDate: moment(values.endDate).format("YYYY-MM-DD"),
    };

    console.log("Form values:", formattedValues);
    onClose();
    form.resetFields();
  };

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
                  <Option value="hr">Hr</Option>
                  <Option value="backend">Backend</Option>
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
    </div>
  );
};

export default AdminListComponent;
