import AddEventComponent from "../components/event/add-event";
import ViewListComponent from "../components/event/view_list.component";
import { useGetProfileInfoQuery } from "../redux/features/profile/profileApi";

const Event = () => {
  const { data } = useGetProfileInfoQuery();
  return (
    <>
      {data?.data?.role === "ADMIN" && <AddEventComponent />}
      <ViewListComponent />
    </>
  );
};

export default Event;
