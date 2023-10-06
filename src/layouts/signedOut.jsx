import React, { useState } from "react";
import { Link } from "react-router-dom";

import LOGO from "../images/logoNew.png";
import Burger from "../images/burger-menu-left-svgrepo-com.svg";

import SearchBar from '../layouts/searchBar.jsx'; 
import Sidebar from "./sidebar.jsx";

const SignedOut = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Sidebar component */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={setSidebarOpen} />

      {/* Main content */}
      <div className="fixed top-0 left-0 z-10 w-full flex items-center justify-between pl-5 pr-8 py-2 border-b-2 border-tier4 bg-tier1 opacity-75">
        <div className="flex items-center">
         {/* Burger menu icon */}
          <img
              src={Burger}
              width="25"
              height="25"
              className="cursor-pointer mr-8"
              onClick={() => setSidebarOpen(!sidebarOpen)}
          />
          <img
            src={LOGO}
            width="3%"
            height="3%"
            alt="Logo"
            className="mr-3 transition-transform transform-gpu hover:scale-110 hover:drop-shadow-3xl"
          />
          <p className="text-white text-2xl font-bold ml-2 transition-transform transform-gpu hover:text-red-300">
            Arty mArt
          </p>
          <SearchBar />
        </div>
        <div className="hidden md:flex space-x-10">
          <Link
            // to="/"
            className="text-white text-1xl font-semibold transition-transform transform-gpu hover:text-red-300"
          >
            Login
          </Link>
          <Link
            // to="/"
            className="text-white text-1xl font-semibold transition-transform transform-gpu hover:text-red-300"
          >
            Join
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignedOut;
