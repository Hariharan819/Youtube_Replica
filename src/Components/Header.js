import React, { useEffect, useState } from "react";
import {
  menu_logo,
  searchicon,
  Suggestionapi,
  usericon,
  youtube_logo,
} from "../Utilis/Constant";
import { useDispatch } from "react-redux";
import { togglemenu } from "../Redux-Utilis/ToggleSlice";

const Header = () => {
  const [Querysearch, setQuerysearch] = useState(" ");
  const dispatch = useDispatch();

  const togglefunc = () => {
    dispatch(togglemenu());
  };

  useEffect(() => {
    //ApI CALL
    // console.log(Querysearch)
    getsuggestions();
    // eslint-disable-next-line
  }, [Querysearch]);

  const getsuggestions = async () => {
    const api_data2 = await fetch(Suggestionapi + Querysearch);
    const json2 = await api_data2.json();
    console.log(json2[1]);
  };
  return (
    <div className=" my-1 grid-flow-col grid shadow-md rounded-sm p-3 ">
      <div className="flex  col-span-2 p-2">
        <img
          src={menu_logo}
          className="h-9 mix-blend-color-burn cursor-pointer"
          alt="menu"
          onClick={togglefunc}
        />
        <img
          src={youtube_logo}
          className="h-7 mix-blend-color-burn mt-1  px-3"
          alt="yt_logo"
        />
      </div>
      <div className="flex col-span-9 ">
        <input
          type="text"
          className="border border-zinc-500 w-2/3 h-10 rounded-l-2xl my-1 outline-gray-500 "
          value={Querysearch}
          onChange={(e) => setQuerysearch(e.target.value)}
        />
        <button className="w-12 border border-zinc-500 h-10 rounded-r-full my-1 justify-center">
          <img src={searchicon} alt="searchicon" className="h-8 px-1" />
        </button>
      </div>
      <div className="flex col-span-1 my-2 justify-center">
        <img className="h-8" src={usericon} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
