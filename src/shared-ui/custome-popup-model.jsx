/* eslint-disable react/prop-types */
import { Modal } from "antd";

const CustomModal = ({ isOpen, title, onClose, onOk, children }) => {
  return (
    <Modal title={title} visible={isOpen} onOk={onOk} onCancel={onClose}>
      {children}
    </Modal>
  );
};

export default CustomModal;
