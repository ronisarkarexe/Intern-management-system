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
      toast(`Admin created successfully.!`, {
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
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter you name!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter Your Name"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter you email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Enter Your Email"
            type="email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Enter Your Password"
            type="password"
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          style={{
            backgroundColor: "#1890ff",
            borderColor: "#1890ff",
            color: "#fff",
          }}
        >
          Add Admin
        </Button>
      </Form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AddAdmin;
