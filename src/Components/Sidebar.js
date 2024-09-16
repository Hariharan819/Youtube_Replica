import React from "react";
import { homeicon, Subscriptionsicon, ytshortsicon} from "../Utilis/Constant";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li className="flex"><img className="h-5" src={homeicon} alt="" /> Home</li>
        <li className="flex"> <img className="h-5" src={ytshortsicon} alt="" />Shorts</li>
        <li className="flex" > <img className="h-5" src={Subscriptionsicon} alt="" />Subscriptions</li>
      </ul>
    </div>
  );
};

export default Sidebar;
