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
    <div className="w-40 -my-1 shadow-md cursor-pointer px-1">
      <ul className="w-40">
        <li className="flex px-2 py-3 hover:bg-slate-500 hover:rounded-sm h-12 hover:text-white">
          <img className="h-5" src={homeicon} alt="" /> Home
        </li>
        <li className="flex px-2 hover:bg-slate-500 hover:rounded-sm h-12 items-center hover:text-white  ">
          <img className="h-5" src={ytshortsicon} alt="" />
          Shorts
        </li>
        <li className="flex px-2  hover:bg-slate-500 hover:rounded-sm h-12  items-center hover:text-white">
          <img
            className="h-5 hover:bg-slate-500 hover:rounded-sm "
            src={Subscriptionsicon}
            alt=""
          />
          Subscriptions
        </li>
      </ul>
      <hr />
      <h4 className=" px-1 font-semibold flex  hover:bg-slate-500 hover:rounded-sm h-12  items-center hover:text-white ">
        <img className="h-5" src={Subscriptionsicon} alt="" />
        Subscriptions
      </h4>
      <ul className="">
        <li className="hover:bg-slate-500 hover:rounded-sm h-12 items-center flex px-2 hover:text-white">
          Music
        </li>
        <li className=" hover:bg-slate-500 hover:rounded-sm h-12  items-center flex px-2 hover:text-white">
          Sports
        </li>
        <li className="hover:bg-slate-500 hover:rounded-sm h-12  items-center flex px-2 hover:text-white">
          Gaming
        </li>
        <li className=" hover:bg-slate-500 hover:rounded-sm  h-12  items-center flex px-2 hover:text-white">
          Movies
        </li>
      </ul>
      <hr />
      <h2 className=" px-1  font-semibold  hover:bg-slate-500 hover:rounded-sm h-12  items-center flex  hover:text-white">
        Explore
      </h2>
      <ul>
        <li className="flex  px-2 hover:bg-slate-500 hover:rounded-sm h-12  items-center hover:text-white ">
          <img className="h-5 " src={trendingicon} alt="" /> Trending
        </li>
        <li className="flex  px-2  hover:bg-slate-500 hover:rounded-sm h-12  items-center hover:text-white ">
          <img className="h-5" src={musicincon} alt="" />
          Music
        </li>
        <li className="flex px-1  hover:bg-slate-500 hover:rounded-sm  items-center h-12 hover:text-white">
          <img className="h-5 px-1" src={shoppingicon} alt="" />
          Shopping
        </li>
        <li className="flex  px-1 hover:bg-slate-500 hover:rounded-sm h-12  items-center  hover:text-white">
          <img className="h-5 px-1" src={gamingicon} alt="" />
          Gaming
        </li>
        <li className="flex  px-2   hover:bg-slate-500 hover:rounded-sm  items-center h-12 hover:text-white ">
          <img className="h-5" src={sportsicon} alt="" />
          Sports
        </li>
        <li className="flex px-1  hover:bg-slate-500 hover:rounded-sm  items-center h-12 hover:text-white ">
          <img className="h-5 px-1" src={liveicon} alt="" />
          Live
        </li>
        <li className="flex px-1  hover:bg-slate-500 hover:rounded-sm   items-center h-12 hover:text-white">
          <img className="h-5 px-1" src={courseicon} alt="" />
          Courses
        </li>
        <li className="flex  px-1 hover:bg-slate-500 hover:rounded-sm   items-center h-12 hover:text-white ">
          <img className="h-5 px-1" src={newsicon} alt="" />
          News
        </li>
        <li className="flex  px-1 hover:bg-slate-500 hover:rounded-sm h-12  items-center  hover:text-white">
          <img className="h-5 px-1" src={podcasticon} alt="" />
          Podcasts
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
