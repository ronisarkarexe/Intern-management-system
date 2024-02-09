import { useForm } from "react-hook-form";

const AddDepartment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("example"));
  return (
    <div className="m-4">
      <h1 className="text-2xl">Add Department</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className="input input-bordered input-sm w-full max-w-xs mt-4"
        />{" "}
        <br />
        {errors.name && (
          <span className="text-red-500 text-sm">This Name is required</span>
        )}{" "}
        <br />
        <button type="submit" className="btn btn-sm btn-outline btn-success">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddDepartment;
