/* eslint-disable @typescript-eslint/no-explicit-any */
import SidebarWrapper from "./SidebarWrapper";
import { MdOutlineLogout } from "react-icons/md";
import React from "react";
import { Link, useLocation } from "react-router";
type TProp = {
  user: any;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleLogOut: () => void;
  sidebarLinks: any;
};

const Sidebar = ({
  user,
  isOpen,
  setIsOpen,
  handleLogOut,
  sidebarLinks,
}: TProp) => {
  const location = useLocation();

  return (
    <div>
      <SidebarWrapper
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={`${user?.role === "admin" ? "Admin Panel" : "Customer Panel"}`}
      >
        <div className="mt-4 pt-5 md:pt-6 lg:pt-8 flex flex-col border-t border-gray-700 gap-3 relative">
          {sidebarLinks.map((menu: any, i: number) => (
            <Link
              to={menu.link}
              key={i}
              className={`group flex items-center text-sm gap-3.5 font-medium p-3
             hover:bg-[#ff5733] rounded-md transition-colors duration-500 ${
               location.pathname === menu.link && "bg-[#ff5733] text-white"
             }`}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre  duration-500 ${
                  !isOpen && "opacity-0  translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              <h2
                className={`${
                  isOpen && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
          <span
            onClick={handleLogOut}
            className="group cursor-pointer  flex items-center text-sm gap-3.5 font-medium px-4 py-3 transition-colors duration-500 hover:bg-[#ff5733] rounded-md mt-auto"
          >
            <div>
              <MdOutlineLogout size="20" />
            </div>
            <h2
              style={{
                transitionDelay: `600ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !isOpen && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Logout
            </h2>
            <h2
              className={`${
                isOpen && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              Logout
            </h2>
          </span>
        </div>
      </SidebarWrapper>
    </div>
  );
};

export default Sidebar;
