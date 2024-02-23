import { useEffect, useState } from "react";
import { useGetProfileInfoQuery } from "../redux/features/profile/profileApi";
import ProfileHeader from "../components/profile/profile-header";
import BasicInfo from "../components/profile/basic-info";
import ActivityInfo from "../components/profile/activity-info";
import AdminInfo from "../components/profile/admin-info";

const ProfileComponent = () => {
  const [adminId, setAdminId] = useState("");
  const [profile, setProfile] = useState(null);
  const { data, isLoading } = useGetProfileInfoQuery();
  console.log("profile data", data);
  useEffect(() => {
    if (data && Object(data?.data)) {
      setProfile(data?.data);
      if (data?.data?.role === "INTERN") {
        setAdminId(data?.data?.departmentId?.adminDetails[0]?.adminId);
      }
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...!</div>;
  }

  return (
    <div className="m-4">
      {data?.data?.role === "INTERN" && (
        <>
          <ProfileHeader profile={profile} adminId={adminId} />
          <BasicInfo profile={profile} />
          <ActivityInfo profile={profile} />
        </>
      )}
      {data?.data?.role === "ADMIN" && (
        <>
          <AdminInfo profile={profile} />
        </>
      )}
    </div>
  );
};

export default ProfileComponent;
