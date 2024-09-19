import React from "react";
import { useEffect } from "react";
import { youtubevideo_api } from "../Utilis/Constant";

const Videocontainer = () => {
  useEffect(() => {
    getvideos();
  }, []);
  const getvideos = async () => {
    const api_data = await fetch(youtubevideo_api);
    const json = await api_data.json();
    console.log(json);
  };
  return <div></div>;
};

export default Videocontainer;
