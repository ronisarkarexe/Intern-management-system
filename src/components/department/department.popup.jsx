/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllAdminQuery } from "../../redux/features/admin/adminApi";
import { useAssignAdminMutation } from "../../redux/features/department/departmentApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteFromStateId } from "../../redux/features/department/departmentSlice";

const DepartmentPopup = ({ isModalOpen, setIsModalOpen }) => {
  const [allAdmins, setAllAdmins] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState({});
  const [loading, setLoading] = useState(false);

  const [assignAdmin] = useAssignAdminMutation();
  const departmentId = useSelector((state) => state.department.departmentId);
  const dispatch = useDispatch();

  const { data } = useGetAllAdminQuery(undefined);
  useEffect(() => {
    if (data && Array.isArray(data.data)) {
      setAllAdmins(data.data);
    }
  }, [data]);

  const handleAdminSelection = (e) => {
    setSelectedAdmin({
      admin: e.target.value,
    });
  };

  const handleOk = async () => {
    try {
      setLoading(true);
      const res = await assignAdmin({ id: departmentId, data: selectedAdmin });
      if (res && res.data) {
        toast.success(`${res.data}`, {
          autoClose: 4000,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("An error occurred while processing your request.", {
        autoClose: 3000,
        theme: "light",
      });
    } finally {
      setLoading(false);
      setIsModalOpen(false);
      dispatch(deleteFromStateId());
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const isExistDepartment = (admin) => {
    if (admin.email && admin.departmentId) {
      return `${admin.email} (Department already exist)`;
    } else {
      return `${admin.email}`;
    }
  };

  return (
    <div>
      <Modal
        title="Assign Admin"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            style={{
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              color: "#fff",
            }}
            onClick={handleOk}
          >
            Save
          </Button>,
        ]}
      >
        <select
          className="select select-bordered select-sm w-full max-w-full mt-4"
          style={{ outline: "none" }}
          onChange={handleAdminSelection}
        >
          <option value="" disabled selected>
            All Admins
          </option>
          {allAdmins.map((admin, i) => (
            <option
              key={i}
              name="admin"
              value={admin._id}
              disabled={admin.departmentId}
            >
              {isExistDepartment(admin)}
            </option>
          ))}
        </select>
      </Modal>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default DepartmentPopup;
