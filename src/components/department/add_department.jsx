import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  useCreateDepartmentMutation,
  useGetAllDepartmentsQuery,
} from "../../redux/features/department/departmentApi";
import { options } from "./department.utils";

const AddDepartment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [createDepartment] = useCreateDepartmentMutation();
  const [departments, setDepartments] = useState([]);
  const { data } = useGetAllDepartmentsQuery(undefined);
  
  useEffect(() => {
    if (data && Array.isArray(data.data)) {
      setDepartments(data.data);
    }
  }, [data]);

  const renderOptionsExist = (optionValue) => {
    const existingDepartment = departments.find(
      (department) => department.departmentName === optionValue
    );
    if (existingDepartment) {
      return `${optionValue} (Department already exist)`;
    }
    return optionValue;
  };

  const isOptionDisabled = (optionValue) => {
    return departments.find(
      (department) => department.departmentName === optionValue
    );
  };

  const onSubmit = async (data) => {
    const res = await createDepartment(data);
    if (res) {
      toast(`${res.data}`, {
        autoClose: 1000,
        theme: "light",
        type: "success",
      });
    }
  };

  return (
    <div className="m-4">
      <h1 className="text-2xl">Add Department</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select
          {...register("departmentName", { required: true })}
          className="select select-bordered select-sm w-full max-w-xs mt-4"
          style={{ outline: "none" }}
        >
          <option value="" disabled selected>
            Select Options
          </option>
          {options.map((option, i) => (
            <option
              key={i}
              value={option.value}
              disabled={isOptionDisabled(option.value)}
            >
              {renderOptionsExist(option.value)}
            </option>
          ))}
        </select>
        <br />
        {errors.departmentName && (
          <span className="text-red-500 text-sm">Please select an option</span>
        )}
        <br />
        <button
          type="submit"
          className="btn btn-sm btn-outline btn-success mt-3 pt-0"
        >
          Save
        </button>
      </form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AddDepartment;
