import React from "react";

import Sidebar from "./Sidebar";

import Videocontainer from "./Videocontaier";
import { useSelector } from "react-redux";

const Body = () => {
  const togglevent = useSelector((store) => store.app.togglevent);
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 pt-28 lg:pt-16 sm:pt-16 md:pt-16 xl:pt-16 2xl:pt-16 overflow-hidden">
        {togglevent && (
          <div className="fixed  left-0 w-64 h-[calc(100vh-4rem)] ">
            <Sidebar />
          </div>
        )}

        <div
          className={`overflow-y-auto bg-gray-100 
          ${
            togglevent
              ? "ml-20 xl:ml-64 lg:ml-64 md:ml-16 sm:ml-16"
              : "ml-4 xl:ml-4 lg:ml-4 md:ml-3 sm:ml-3"
          }
        `}
        >
          <Videocontainer />
        </div>
      </div>
    </div>
  );
};

export default Body;
