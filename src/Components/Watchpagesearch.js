import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {YOUR_API_KEY } from "../Utilis/Constant";

const Watchpagesearch = () => {
  const location = useLocation();
  const [queryvalue, setqueryvalue] = useState([]);
  const getQueryParam = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("search");
  };
  const query = getQueryParam();
  
  const keywordbasedvideo=async()=>{
    const video_data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+{query}+ "&type=video&key="+YOUR_API_KEY);
    const json3=await video_data.json();
    // console.log(json3.items);
    setqueryvalue(json3.items);
    console.log(queryvalue);

  }

  useEffect(() => {
  
    keywordbasedvideo();
    // eslint-disable-next-line
  }, [""]);
  return <div className="pt-10">

  </div>;
};

export default Watchpagesearch;
