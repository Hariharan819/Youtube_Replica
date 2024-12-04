import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  homeicon,
  ytshortsicon,
  Subscriptionsicon,
  courseicon,
  gamingicon,
  musicincon,
  sportsicon,
  liveicon,
  podcasticon,
  newsicon,
  shoppingicon,
  trendingicon,
} from "../Utilis/Constant";
const Sidebar = () => {
  const togglevent = useSelector((store) => store.app.togglevent);

  return !togglevent ? null : (
    <div
      className="bg-white top-16 left-0 h-screen shadow-md overflow-y-auto z-20 
      w-16 md:w-16 sm:w-16 lg:w-64 transition-all duration-300"
    >
      <div className="py-4">
        {/* Primary Menu */}
        <ul>
          <Link to="/">
            <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
              <img className="h-5" src={homeicon} alt="Home" />
              <span className="hidden lg:inline">Home</span>
            </li>
          </Link>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={ytshortsicon} alt="Shorts" />
            <span className="hidden lg:inline">Shorts</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={Subscriptionsicon} alt="Subscriptions" />
            <span className="hidden lg:inline">Subscriptions</span>
          </li>
        </ul>

        <hr className="my-4" />

        {/* Subscriptions */}
        <div className="flex">
          <img
            className="h-5 px-3"
            src={Subscriptionsicon}
            alt="Subscriptions"
          />
          <h4 className="text-gray-700 font-semibold -ml-1 hidden lg:block">
            Subscriptions
          </h4>
        </div>

        <ul>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={musicincon} alt="Music" />
            <span className="hidden lg:inline">Music</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={sportsicon} alt="Sports" />
            <span className="hidden lg:inline">Sports</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={gamingicon} alt="Gaming" />

            <span className="hidden lg:inline">Gaming</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
          <img className="h-5" src={trendingicon} alt="Trending" />
            <span className="hidden lg:inline">Movies</span>
          </li>
        </ul>

        <hr className="my-4" />

        {/* Explore Section */}
        <h2 className="text-gray-700 font-semibold px-3 py-2 hidden lg:block">
          Explore
        </h2>
        <ul>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={trendingicon} alt="Trending" />
            <span className="hidden lg:inline">Trending</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={musicincon} alt="Music" />
            <span className="hidden lg:inline">Music</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={shoppingicon} alt="Shopping" />
            <span className="hidden lg:inline">Shopping</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={gamingicon} alt="Gaming" />
            <span className="hidden lg:inline">Gaming</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={sportsicon} alt="Sports" />
            <span className="hidden lg:inline">Sports</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={liveicon} alt="Live" />
            <span className="hidden lg:inline">Live</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={courseicon} alt="Courses" />
            <span className="hidden lg:inline">Courses</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={newsicon} alt="News" />
            <span className="hidden lg:inline">News</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <img className="h-5" src={podcasticon} alt="Podcasts" />
            <span className="hidden lg:inline">Podcasts</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
