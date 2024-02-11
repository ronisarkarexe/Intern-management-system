/* eslint-disable react/prop-types */
import { Popconfirm } from "antd";

const DeleteConfirmation = ({
  id,
  onConfirm,
  onCancel,
  title,
  description,
  children,
}) => {
  const confirm = () => {
    if (onConfirm) onConfirm(id);
  };
  const cancel = () => {
    if (onCancel) onCancel(id);
  };

  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      okButtonProps={{
        style: { backgroundColor: "#1890ff", borderColor: "#1890ff" },
      }}
      cancelText="No"
    >
      {children}
    </Popconfirm>
  );
};

export default DeleteConfirmation;
