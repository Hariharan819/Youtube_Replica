import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../Redux-Utilis/ToggleSlice";
import { useSearchParams } from "react-router-dom";

const Watchpage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const idofvideo = params.get("v");
  useEffect(() => {
    dispatch(closemenu());
    // eslint-disable-next-line
  }, []);
  console.log(idofvideo);
  return (
    <div className="w-full sm:w-[95%] mx-auto pt-16">
    <div className="relative aspect-video overflow-hidden">
     
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={"https://www.youtube.com/embed/" + idofvideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  
  );
};

export default Watchpage;
