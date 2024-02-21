import { useEffect, useState } from "react";
import { useGetProfileInfoQuery } from "../redux/features/profile/profileApi";
import { Button } from "antd";
import CertificateModel from "../components/model/CertificateModel";
import GenerateCertificateComponent from "../components/generate-certificate/generate-certificate";

const ProfileComponent = () => {
  const [profile, setProfile] = useState(null);
  const { data, isLoading } = useGetProfileInfoQuery(undefined);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (data && Object(data.data)) {
      setProfile(data.data);
    }
  }, [data]);

  const handelGenerateCertificate = () => {
    setIsOpenModal(true);
  };

  if (isLoading) {
    return <div>Loading...!</div>;
  }

  return (
    <div className="m-4">
      <h1 className="text-xl">Name: {profile?.name}</h1>
      <h1 className="text-xl">Email: {profile?.email}</h1>
      <Button danger size="small" onClick={handelGenerateCertificate}>
        Generate Certificate
      </Button>

      <CertificateModel
        isOpen={isOpenModal}
        handleClose={() => setIsOpenModal(false)}
      >
        <GenerateCertificateComponent profile={profile} />
      </CertificateModel>
    </div>
  );
};

export default ProfileComponent;
