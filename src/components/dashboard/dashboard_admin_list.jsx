import { useEffect, useState } from "react";
import { useGetAllAdminQuery } from "../../redux/features/admin/adminApi";
import { getLocalTime } from "../../utils/time-convert";
import LoadingComponent from "../../shared-ui/loading";

const DashboardAdminList = () => {
  const [allAdmins, setAllAdmins] = useState([]);
  const { data, isLoading } = useGetAllAdminQuery(undefined);

  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setAllAdmins(data.data.data);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="mx-4">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>CreatedAt</th>
            <th>Department</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {allAdmins.map((admin, index) => (
            <tr key={admin._id}>
              <th>{index + 1}</th>
              <th>{admin.name}</th>
              <th>{admin.email}</th>
              <th>{admin?.departmentId?.departmentName}</th>
              <th>{getLocalTime(admin.createdAt)}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardAdminList;
