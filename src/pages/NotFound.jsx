import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handelNotFoundPage = () => {
    navigate("/");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          style={{
            backgroundColor: "#1890ff",
            borderColor: "#1890ff",
            color: "#fff",
          }}
          onClick={handelNotFoundPage}
        >
          Back To Home
        </Button>
      }
    />
  );
};

export default NotFound;
