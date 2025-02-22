import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../pages/Sidebar/Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
import useAuth from "../hooks/useAuth";
import { CiTextAlignJustify } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const { user } = useAuth();
  const { logOut } = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  // handle logout
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Left Side Navigation */}
      {user && (
        <>
          <div
            className={`bg-white shadow-md p-5 flex flex-col fixed top-0 left-0 h-full min-h-screen z-50 transition-transform duration-300 ${
              isNavOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:static md:flex md:w-1/4 lg:w-1/5 overflow-y-auto`}
          >
            {/* Logo */}
            <h1 className="text-2xl">Task Manager</h1>
            {user && <Sidebar handleLogOut={handleLogOut}></Sidebar>}
          </div>
          {/* Toggle Button for Mobile */}
          <button
            onClick={toggleNav}
            className="md:hidden fixed right-5 top-5 z-50 bg-[#D1A054] text-white p-3 rounded-full shadow-md hover:bg-[#b5863e] transition-all"
          >
            {isNavOpen ? (
              <p className="flex justify-center items-center gap-2">
                Close <IoClose />
              </p>
            ) : (
              <p className="flex justify-center items-center gap-2">
                Menu <CiTextAlignJustify />
              </p>
            )}
          </button>
        </>
      )}

      {/* Right Side Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 min-h-screen">
        <Toaster></Toaster>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
