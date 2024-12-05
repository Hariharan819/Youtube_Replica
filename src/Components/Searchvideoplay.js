import React from "react";
// import { useParams } from "react-router";
import { useParams } from "react-router-dom";

const Searchvideoplay = () => {
  const { id } = useParams();
  // console.log(id);
  return (
    <div className="w-full sm:w-[95%] mx-auto pt-16">
    <div className="relative aspect-video overflow-hidden">
     
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  
  );
};

export default Searchvideoplay;
