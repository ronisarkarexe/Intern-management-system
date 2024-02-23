import AddSalary from "../components/salary/add-salary";
import InternSalaryDetails from "../components/salary/intern-salary-details";
import ViewListComponent from "../components/salary/view-list.component";
import { useGetProfileInfoQuery } from "../redux/features/profile/profileApi";

const Salary = () => {
  const { data } = useGetProfileInfoQuery();
  return (
    <>
      {data?.data?.role === "ADMIN" && (
        <>
          <AddSalary />
          <ViewListComponent />
        </>
      )}
      {data?.data?.role === "INTERN" && (
        <>
          <InternSalaryDetails />
        </>
      )}
    </>
  );
};

export default Salary;
