import React from "react";
import { Link } from "react-router-dom";

const Watchpagevideo = ({ data }) => {
  const imgurl = data?.snippet?.thumbnails?.medium?.url;
  const title = data?.snippet?.title;
  const channeltitle = data?.snippet?.channelTitle;

  return (
    <div className=" max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 transform hover:scale-105 transition duration-300 ease-in-out">
      <img className="w-full h-40 object-cover" src={imgurl} alt="thumbnail" />
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-900 truncate">
          {channeltitle}
        </h1>
        <p className="mt-2 text-gray-700 text-sm line-clamp-2">{title}</p>
      </div>
      <div className="px-4 py-2 border-t border-gray-200">
        <Link to={"/searchvideo/" + data?.id?.videoId}>
          <button className="w-full text-white bg-red-600 hover:bg-red-700 font-semibold py-2 rounded-md transition duration-300">
            Watch Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Watchpagevideo;
