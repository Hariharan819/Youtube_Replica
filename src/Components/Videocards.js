import React from "react";
import { useSelector } from "react-redux";

const Videocards = ({ data }) => {
  const togglevent = useSelector((store) => store.app.togglevent);
  // console.log(data);
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div
      className={`rounded-md bg-slate-100 shadow-md m-2 p-2 cursor-pointer h-80 hover:-translate-y-2  transition-transform 
        ${togglevent ? "w-60" : "w-80"} 
       ${togglevent ? "2xl:w-72" : "2xl:w-80"} 
        ${togglevent ? "xl:w-60" : "xl:w-72"} 
         ${togglevent ? "lg:w-56" : "lg:w-52"} 
          ${togglevent ? "md:w-52" : "md:w-56"} 
           ${togglevent ? "sm:w-64" : "sm:w-72"} 
       `}
    >
      <img className="rounded-sm w-[100%]" src={thumbnails.medium.url} alt="" />
      <ul className="flex flex-col">
        <li className="font-serif text-red-500 pt-2  ">{channelTitle}</li>
        <li className="font-medium font-sans text-green-500">{title}</li>
        <li className="pt-1 justify-end font-mono  font-semibold text-pink-700">
          {statistics.viewCount} Views
        </li>
      </ul>
    </div>
  );
};

export default Videocards;
