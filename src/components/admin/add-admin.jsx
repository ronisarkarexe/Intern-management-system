import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useCreateAdminMutation } from "../../redux/features/admin/adminApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAdmin = () => {
  const [createAdmin] = useCreateAdminMutation();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const res = await createAdmin(values);
    if (res) {
      toast(`${res?.data?.message}`, {
        autoClose: 1000,
        theme: "light",
        type: "success",
      });
    }
    form.resetFields();
  };

  return (
    <div className="m-4" style={{ width: "40%" }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="text"
            placeholder="Enter your name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Enter your email!"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Enter your password!"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              color: "#fff",
            }}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AddAdmin;
