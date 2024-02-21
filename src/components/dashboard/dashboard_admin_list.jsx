import { useEffect, useState } from "react";
import { useGetAllAdminQuery } from "../../redux/features/admin/adminApi";
import { getLocalTime } from "../../utils/time-convert";
import { useGetProfileInfoQuery } from "../../redux/features/profile/profileApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/profile/profileSlice";

const DashboardAdminList = () => {
  const [allAdmins, setAllAdmins] = useState([]);
  const [profile, setProfile] = useState(null);
  const { data, isLoading } = useGetAllAdminQuery(undefined);
  const { data: profileData } = useGetProfileInfoQuery(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setAllAdmins(data.data.data);
    }
  }, [data]);

  useEffect(() => {
    if (profileData && Object(profileData.data)) {
      setProfile(profileData.data);
    }
  }, [profileData]);

  dispatch(addUser(profile));

  if (isLoading) {
    return <div>Loading...!</div>;
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
