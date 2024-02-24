/* eslint-disable react/prop-types */
import { useGetSingleAdminQuery } from "../../redux/features/admin/adminApi";

const ProfileHeader = ({ profile, adminId }) => {
  const { data } = useGetSingleAdminQuery(adminId);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div
        className="card bg-base-100 rounded-sm shadow-xl"
        style={{ flex: "0 0 40%" }}
      >
        <div className="card-body border-dotted">
          <h2 className="card-title">
            Name: {profile?.firstName} {profile?.lastName}
          </h2>
          <p>Email: {profile?.email}</p>{" "}
          <p>Department: {profile?.departmentId?.departmentName}</p>
        </div>
      </div>

      <div
        className="card bg-base-100 rounded-sm shadow-xl"
        style={{ flex: "1" }}
      >
        <div className="card-body">
          <h2 className="card-title">Mentor Name: {data?.data?.name}</h2>
          <p>Email: {data?.data?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
