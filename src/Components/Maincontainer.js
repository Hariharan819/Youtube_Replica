import React from "react";
import Videocontainer from "./Videocontaier";
import Sidebar from "./Sidebar";

const Maincontainer = () => {
  return (
    <div className="flex overflow-hidden justify-between ">
      <Sidebar />
      <Videocontainer />
    </div>
  );
};

export default Maincontainer;
