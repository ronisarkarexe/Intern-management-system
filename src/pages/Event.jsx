import { useSelector } from "react-redux";
import AddEventComponent from "../components/event/add-event";
import ViewListComponent from "../components/event/view_list.component";

const Event = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      {user.role === "ADMIN" && <AddEventComponent />}
      <ViewListComponent />
    </>
  );
};

export default Event;
