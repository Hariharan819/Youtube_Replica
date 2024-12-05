import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { YOUR_API_KEY2 } from "../Utilis/Constant";
import Watchpagevideo from "./Watchpagevideo";

const Watchpagesearch = () => {
  const location = useLocation();
  const [queryvalue, setqueryvalue] = useState([]);
  const getQueryParam = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("search");
  };
  const query = getQueryParam();

  // console.log(query);

  const keywordbasedvideo = async () => {
    const video_data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" +
        query +
        "&type=video&key=" +
        YOUR_API_KEY2
    );
    const json3 = await video_data.json();
    // console.log(json3.items);
    setqueryvalue(json3.items);
    // console.log(queryvalue);
  };

  useEffect(() => {
    keywordbasedvideo();
    // eslint-disable-next-line
  }, [""]);
  return (
    <div className="pt-16  p-4 bg-gray-100 min-h-screen ">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Search Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
        {queryvalue.map((videodata) => (
          <Watchpagevideo key={videodata.id} data={videodata} />
        ))}
      </div>
    </div>
  );
};

export default Watchpagesearch;
