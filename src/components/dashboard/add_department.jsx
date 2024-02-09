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
          {...register("name", { ...register("name") })}
          className="input input-bordered input-sm w-full max-w-xs mt-3"
        />
        {errors.name && <span>This field is required</span>}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddDepartment;
