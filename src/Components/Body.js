import React from "react";
// import Sidebar from "./Sidebar";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Videocontainer from "./Videocontaier";

const Body = () => {
  return (
    <div>
      <div className="">
        <Header />
        <div className="flex flex-col">
          <Sidebar />
          <Videocontainer />
        </div>
      </div>
    </div>
  );
};

export default Body;
