import AddLeave from "../components/leave/add-leave";
import ViewListComponent from "../components/leave/view-list.component";
import { useGetProfileInfoQuery } from "../redux/features/profile/profileApi";

const Leave = () => {
  const { data } = useGetProfileInfoQuery();
  return (
    <>
      {data?.data?.role === "INTERN" && (
        <>
          <AddLeave />
        </>
      )}
      <ViewListComponent />
    </>
  );
};

export default Leave;
