import { useState, useEffect } from "react";

const DashboardHeader = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/department`)
      .then((response) => response.json())
      .then((data) => {
        setDepartments(data.data);
      });
  }, []);

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
