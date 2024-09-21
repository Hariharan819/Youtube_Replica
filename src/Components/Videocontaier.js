import React, { useState } from "react";
import { useEffect } from "react";
import { youtubevideo_api } from "../Utilis/Constant";
import Videocards from "./Videocards";

const Videocontainer = () => {
  const [videodata, setvideodata] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);
  const getvideos = async () => {
    const api_data = await fetch(youtubevideo_api);
    const json = await api_data.json();
    setvideodata(json.items);
  };

  return (
    <div>
      {videodata.map((videodata) => (
        <Videocards data={videodata} />
      ))}
    </div>
  );
};

export default Videocontainer;
