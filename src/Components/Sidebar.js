import React from "react";
import {
  courseicon,
  gamingicon,
  homeicon,
  liveicon,
  musicincon,
  newsicon,
  podcasticon,
  shoppingicon,
  sportsicon,
  Subscriptionsicon,
  trendingicon,
  ytshortsicon,
} from "../Utilis/Constant";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const togglevent = useSelector((store) => store.app.togglevent);
  return !togglevent ? null : (
    <div className="w-40 -my-1 shadow-md cursor-pointer ">
      <ul className="">
        <li className="flex px-2 py-3">
          <img className="h-5" src={homeicon} alt="" /> Home
        </li>
        <li className="flex px-2">
          {" "}
          <img className="h-5" src={ytshortsicon} alt="" />
          Shorts
        </li>
        <li className="flex px-2 py-3">
          {" "}
          <img className="h-5" src={Subscriptionsicon} alt="" />
          Subscriptions
        </li>
      </ul>
      <h4 className="py-3 px-1 font-semibold flex ">
        <img className="h-5" src={Subscriptionsicon} alt="" />
        Subscriptions
      </h4>
      <ul className="px-2">
        <li className="">Music</li>
        <li className="py-3">Sports</li>
        <li>Gaming</li>
        <li className="py-3">Movies</li>
      </ul>
      <h2 className=" px-1 py-3 font-semibold">Explore</h2>
      <ul>
        <li className="flex pt-2 px-2 py-3">
          {" "}
          <img className="h-5" src={trendingicon} alt="" /> Trending
        </li>
        <li className="flex pt-2 px-2 py-3">
          {" "}
          <img className="h-5" src={musicincon} alt="" />
          Music
        </li>
        <li className="flex pt-2 px-1 py-3">
          {" "}
          <img className="h-5 px-1" src={shoppingicon} alt="" />
          Shopping
        </li>
        <li className="flex pt-2 px-1 py-3">
          {" "}
          <img className="h-5 px-1" src={gamingicon} alt="" />
          Gaming
        </li>
        <li className="flex pt-2 px-2 py-3">
          {" "}
          <img className="h-5" src={sportsicon} alt="" />
          Sports
        </li>
        <li className="flex pt-2 px-1 py-3">
          {" "}
          <img className="h-5 px-1" src={liveicon} alt="" />
          Live
        </li>
        <li className="flex pt-2 px-1 py-3">
          {" "}
          <img className="h-5 px-1" src={courseicon} alt="" />
          Courses
        </li>
        <li className="flex pt-2 px-1 py-3">
          {" "}
          <img className="h-5 px-1" src={newsicon} alt="" />
          News
        </li>
        <li className="flex pt-2 px-1 py-3">
          {" "}
          <img className="h-5 px-1" src={podcasticon} alt="" />
          Podcasts
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
