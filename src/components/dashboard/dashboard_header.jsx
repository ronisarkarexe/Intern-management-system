import { useEffect, useState } from "react";
import { useGetAllDepartmentsQuery } from "../../redux/features/department/departmentApi";

const DashboardHeader = () => {
  const [departments, setDepartments] = useState([]);
  const { data, isLoading } = useGetAllDepartmentsQuery(undefined);
  useEffect(() => {
    if (data && Array.isArray(data.data)) {
      setDepartments(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...!</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-5">
      {departments.map((department) => (
        <div key={department._id} className="mb-4">
          <div className="bg-base-100 shadow-xl">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{`${department.internDetails.length} ${department.departmentName}`}</h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardHeader;
