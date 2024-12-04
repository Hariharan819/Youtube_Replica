import React from "react";
import { useSelector } from "react-redux";

const Videocards = ({ data }) => {
  const togglevent = useSelector((store) => store.app.togglevent);
  // console.log(data);
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div
      className={`rounded-md bg-slate-100 shadow-md m-2 p-2 cursor-pointer h-80 hover:-translate-y-2  transition-transform ${
        togglevent ? "w-72" : "w-80"
      } `}
    >
      <img className="rounded-sm w-[100%]" src={thumbnails.medium.url} alt="" />
      <ul className="flex flex-col">
        <li className="font-semibold ">{channelTitle}</li>
        <li>{title}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default Videocards;
