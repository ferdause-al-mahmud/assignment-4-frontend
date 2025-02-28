import { Outlet } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectUser } from "../../redux/features/user/userSlice";
import { RxDashboard } from "react-icons/rx";
import { FaUserCircle, FaUsers } from "react-icons/fa";
import { MdOutlineAddCard } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { TbMotorbike } from "react-icons/tb";
import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";

// import { MdOutlineLogout } from "react-icons/md";
// import { FaUserCircle } from "react-icons/fa";
// import {MdOutlineLogout} from "react-icons/md";
// import { FaUserCircle } from "react-icons/fa";

const adminMenus = [
  { name: "Dashboard", link: "/dashboard", icon: RxDashboard },
  { name: "Users", link: "/dashboard/users", icon: FaUsers },
  {
    name: "Bikes",
    link: "/dashboard/bikes",
    icon: TbMotorbike,
  },
  {
    name: "Add Bike",
    link: "/dashboard/add-bike",
    icon: MdOutlineAddCard,
  },

  {
    name: "Order Review",
    link: "/dashboard/orders",
    icon: BsFillCartCheckFill,
  },
  {
    name: "Profile",
    link: "/dashboard/profile",
    icon: FaUserCircle,
  },
];
const customerMenus = [
  { name: "Dashboard", link: "/dashboard", icon: RxDashboard },

  {
    name: "Track My Order",
    link: "/dashboard/order",
    icon: BsFillCartCheckFill,
  },
  {
    name: "Profile",
    link: "/dashboard/profile",
    icon: FaUserCircle,
  },
];
export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const user = useAppSelector(selectUser);
  const sidebarLinks = user?.role === "admin" ? adminMenus : customerMenus;
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <section className="flex gap-2">
      <Sidebar
        user={user}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleLogOut={handleLogOut}
        sidebarLinks={sidebarLinks}
      />
      {/* Main Content */}
      <div className="m-3 text-xl text-gray-900 font-semibold w-full">
        <Outlet />
      </div>
    </section>
  );
}
