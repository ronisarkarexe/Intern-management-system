import { useEffect, useState } from "react";
import { useGetProfileInfoQuery } from "../../redux/features/profile/profileApi";
import ViewGenerateCertificate from "./generate-certificate";

const GenerateCertificateComponent = () => {
  const [profile, setProfile] = useState(null);
  const { data } = useGetProfileInfoQuery(undefined);
  useEffect(() => {
    if (data && Object(data.data)) {
      setProfile(data.data);
    }
  }, [data]);
  return (
    <>
      <ViewGenerateCertificate profile={profile} />
    </>
  );
};

export default GenerateCertificateComponent;
