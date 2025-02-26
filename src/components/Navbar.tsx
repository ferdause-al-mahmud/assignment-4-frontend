import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/all-product", name: "All Products" },
  { path: "/about", name: "About Us" },
  { path: "/contact", name: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white w-full   shadow-md fixed top-0 z-10">
      <div className="  px-4 lg:px-0 relative container mx-auto ">
        <div className="flex  h-16 items-center justify-between">
          <Link
            className="text-3xl lg:text-4xl   font-bold bg-gradient-to-r from-[#df1d01] via-[#ff5733] to-[#ff8c42]
 bg-clip-text text-transparent"
            to={"/"}
          >
            Fusion
          </Link>

          <div className="hidden lg:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-2 ">
                {navLinks.map((el) => (
                  <li key={el?.path}>
                    <NavLink
                      to={el?.path}
                      className={`text-gray-800 transition py-2 px-4  text-base 
                                           
                                            ${
                                              location?.pathname === el.path &&
                                              " bg-[#ff5733] font-medium text-white"
                                            }`}
                    >
                      {" "}
                      {el?.name}
                      {/* ${location?.pathname === el.path && ' underline decoration-teal-500 decoration-[3px] text-teal-500  font-medium underline-offset-8'}`} > {el?.name} */}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-[#ff5733] px-5 py-2.5 text-sm font-medium text-white shadow"
                  to={"/login"}
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    to={"/signup"}
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#ff5733]"
                  >
                    Register
                  </Link>
                </div>
              </div>
            }

            <div className="block  lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {open && (
              <div className=" flex flex-col gap-2 rounded-lg shadow-2xl p-3 lg:hidden w-[170px] bg-white absolute top-[70px] right-5">
                {navLinks.map((el) => (
                  <Link
                    onClick={() => setOpen(!open)}
                    className={`  ${
                      location.pathname === el.path && "bg-teal-500 text-white"
                    } py-1.5 rounded-md px-3 hover:bg-teal-500 hover:text-white`}
                    to={el.path}
                  >
                    {el.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
