import AdminListComponent from "../components/intern/add_intern";
import ViewListComponent from "../components/intern/view_list.component";
import { useGetProfileInfoQuery } from "../redux/features/profile/profileApi";

const Intern = () => {
  const { data } = useGetProfileInfoQuery();
  return (
    <>
      {data?.data?.role === "ADMIN" && (
        <>
          <AdminListComponent />
        </>
      )}
      <ViewListComponent />
    </>
  );
};

export default Intern;
