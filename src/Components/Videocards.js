import React from "react";

const Videocards = ({ data }) => {
  // console.log(data);
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="rounded-md bg-slate-100 shadow-md w-80 p-2 m-2 cursor-pointer h-80" >
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
