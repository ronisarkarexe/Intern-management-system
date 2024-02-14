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
const { Option } = Select;

const AdminListComponent = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
              onClick={onClose}
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
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter user name",
                    type: "text",
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter user name",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter url",
                    type: "password",
                  },
                ]}
              >
                <Input placeholder="Please enter url" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
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
          </Row>
          <Col span={12}>
            <Form.Item
              name="endDate"
              label="DateTime"
              rules={[
                {
                  required: true,
                  message: "Please choose the dateTime",
                  type: "date",
                },
              ]}
            >
              <DatePicker.RangePicker
                style={{
                  width: "100%",
                }}
                getPopupContainer={(trigger) => trigger.parentElement}
              />
            </Form.Item>
          </Col>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="department"
                label="Department"
                rules={[
                  {
                    required: true,
                    message: "Please choose the approver",
                  },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="hr">Hr</Option>
                  <Option value="backend">Backend</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default AdminListComponent;
