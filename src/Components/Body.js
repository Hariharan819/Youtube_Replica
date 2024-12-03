import React from "react";
// import Sidebar from "./Sidebar";
import Sidebar from "./Sidebar";
import Videocontainer from "./Videocontaier";

const Body = () => {
  return (
    <div className=" flex overflow-auto" >
      <Sidebar/>
      <Videocontainer/>
    </div>
  );
};

export default Body;
