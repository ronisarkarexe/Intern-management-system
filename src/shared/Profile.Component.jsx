import { useEffect, useState } from "react";
import { useGetProfileInfoQuery } from "../redux/features/profile/profileApi";

const ProfileComponent = () => {
  const [profile, setProfile] = useState(null);
  const { data, isLoading } = useGetProfileInfoQuery(undefined);

  useEffect(() => {
    if (data && Object(data.data)) {
      setProfile(data.data);
    }
  }, [data]);
  if (isLoading) {
    return <div>Loading...!</div>;
  }
  return (
    <div className="m-4">
      <h1 className="text-xl">Name: {profile?.name}</h1>
      <h1 className="text-xl">Email: {profile?.email}</h1>
    </div>
  );
};

export default ProfileComponent;
