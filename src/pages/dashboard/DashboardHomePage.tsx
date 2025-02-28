import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import AdminDashboard from "./sidebar/adminSidebar/AdminDashboard";
import CustomerDashboard from "./sidebar/customerSidebar/CustomerDashboard";

const DashboardHomePage = () => {
  const user = useAppSelector(selectUser);

  return (
    <div>
      {user?.role === "admin" ? <AdminDashboard /> : <CustomerDashboard />}
    </div>
  );
};

export default DashboardHomePage;
