import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  useDeleteDepartmentMutation,
  useGetAllDepartmentsQuery,
} from "../../redux/features/department/departmentApi";
import DepartmentPopup from "./department.popup";
import { addDepartmentId } from "../../redux/features/department/departmentSlice";
import { getLocalTime } from "../../utils/time-convert";
import DeleteConfirmation from "../../shared-ui/delete_confirmation";
import { Button, message } from "antd";

const DepartmentList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [departments, setDepartments] = useState([]);
  const { data, isLoading } = useGetAllDepartmentsQuery(undefined);
  const dispatch = useDispatch();
  const [deleteDepartment] = useDeleteDepartmentMutation();

  useEffect(() => {
    if (data && Array.isArray(data.data)) {
      setDepartments(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...!</div>;
  }

  const handelAssignAdmin = (departmentId) => {
    setIsModalOpen(true);
    dispatch(addDepartmentId(departmentId));
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteDepartment(id);
      if (res) {
        message.success(res.data);
      }
    } catch (error) {
      message.error("An error occurred while deleting department");
    }
  };

  return (
    <div className="m-4">
      <h3>Department Lists</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>CreatedAt</th>
              <th>Delete</th>
              <th>Assign Admin</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department, index) => (
              <tr key={department._id}>
                <th>{index + 1}</th>
                <td>{department.departmentName}</td>
                <td>{getLocalTime(department.createdAt)}</td>
                <td>
                  <DeleteConfirmation
                    id={department._id}
                    title="Delete the department"
                    description="Are you sure to delete this department?"
                    onConfirm={handleDelete}
                  >
                    <Button danger size="small">
                      Delete
                    </Button>
                  </DeleteConfirmation>
                </td>
                <td>
                  <button
                    className="btn btn-xs btn-success"
                    disabled={department.adminDetails.length}
                    onClick={() => handelAssignAdmin(department._id)}
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <DepartmentPopup
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default DepartmentList;
