import React from "react";
import Videocontainer from "./Videocontaier";
import Sidebar from "./Sidebar";

const Maincontainer = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Videocontainer />
    </div>
  );
};

export default Maincontainer;
