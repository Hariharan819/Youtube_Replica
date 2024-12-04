import React, { useState, useEffect } from "react";
import { youtubevideo_api } from "../Utilis/Constant";
import Videocards from "./Videocards";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [videodata, setvideodata] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getvideos();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const getvideos = async () => {
    const api_data = await fetch(youtubevideo_api);
    const json = await api_data.json();
    setvideodata(json.items);
  };
  // console.log(videodata)
  return (
    <div className=" flex flex-wrap ">
      {videodata.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <Videocards data={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
