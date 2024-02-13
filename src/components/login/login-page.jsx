import { useLocation, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Radio, message } from "antd";
import { useLoginUserMutation } from "../../redux/features/auth/auth";
import { useDispatch } from "react-redux";
import { addAccessTokenId } from "../../redux/features/auth/authSlice";
import { token } from "../../redux/utils";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      const result = await loginUser(values);
      if (result && result.data) {
        if (values.remember && !token) {
          localStorage.setItem("accessToken", result.data.accessToken);
        } else {
          dispatch(addAccessTokenId(result.data.accessToken));
        }
        message.success("Login successful.");
        navigate(from, { relative: true });
      }
    } catch (error) {
      message.error("Please select role.!");
    }
  };

  return (
    <div style={{ maxWidth: "350px", margin: "auto" }}>
      <div className="mt-5">
        <h1 className="text-2xl text-center my-4">Login</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item name="role">
            <Radio.Group>
              <Radio value="ADMIN">Admin</Radio>
              <Radio value="INTERN">Intern</Radio>
            </Radio.Group>
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
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Email"
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
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
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
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
