import React from "react";
// import Sidebar from "./Sidebar";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Videocontainer from "./Videocontaier";
import { useSelector } from "react-redux";

const Body = () => {
  const togglevent = useSelector((store) => store.app.togglevent);
  return (
    <div className="h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10">
        <Header />
      </div>

      <div className="flex flex-1 pt-16 overflow-hidden">
        {togglevent && (
          <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] ">
            <Sidebar />
          </div>
        )}
        <div
          className={`flex-1 ${
            togglevent ? "ml-64" : "ml-4"
          } overflow-y-auto bg-gray-100`}
        >
          <Videocontainer />
        </div>
      </div>
    </div>
  );
};

export default Body;
