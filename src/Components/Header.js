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
    const [suggestionvalue, setsuggestionvalue] = useState([]);
    const [showsuggestion, setshowsuggestion] = useState(false);
    const dispatch = useDispatch();

    const searchclickfun = (value) => {
      setQuerysearch(value);
    };

    const togglefunc = () => {
      dispatch(togglemenu());
    };

    useEffect(() => {
      getsuggestions();
      // eslint-disable-next-line
    }, [Querysearch]);

    const getsuggestions = async () => {
      const api_data2 = await fetch(Suggestionapi + Querysearch);
      const json2 = await api_data2.json();
      // console.log(js)
      setsuggestionvalue(json2[1]);
    };

    return (
      <div className="bg-white shadow-md overflow-y-hidden w-screen fixed top-0">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-10">
          {/* Left Section */}
          <div className="flex items-center">
            <img
              src={menu_logo}
              className="h-8 cursor-pointer"
              alt="Menu"
              onClick={togglefunc}
            />
            <img
              src={youtube_logo}
              className="h-6 ml-3 md:h-8"
              alt="YouTube Logo"
            />
          </div>

          {/* Middle Section */}
          <div className="hidden md:flex items-center flex-grow justify-center">
            <div className="relative flex items-center w-1/2 md:w-3/4 lg:w-1/3 xl:w-1/2">
              <input
                type="text"
                className="border border-gray-300 rounded-l-full px-4 py-2 w-full outline-none text-sm"
                value={Querysearch}
                onChange={(e) => setQuerysearch(e.target.value)}
                onFocus={() => setshowsuggestion(true)}
                onBlur={() => setshowsuggestion(false)}
                placeholder="Search"
              />
              <button className="bg-gray-100 border border-gray-300 rounded-r-full p-2">
                <img src={searchicon} alt="Search Icon" className="h-5" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            <img
              className="h-8 cursor-pointer"
              src={usericon}
              alt="User Icon"
            />
          </div>
        </div>

        {/* Mobile Search Section */}
        <div className="flex md:hidden px-4 py-2">
          <div className="relative flex items-center w-full">
            <input
              type="text"
              className="border border-gray-300 rounded-l-full px-4 py-2 w-full outline-none text-sm"
              value={Querysearch}
              onChange={(e) => setQuerysearch(e.target.value)}
              onFocus={() => setshowsuggestion(true)}
              onBlur={() => setshowsuggestion(false)}
              placeholder="Search"
            />
            <button className="bg-gray-100 border border-gray-300 rounded-r-full p-2">
              <img src={searchicon} alt="Search Icon" className="h-6" />
            </button>
          </div>
        </div>

        {/* Suggestions Dropdown */}
        {showsuggestion && (
          <div className="fixed bg-white shadow-md rounded-md mt-1 w-[35%] right-[30%] ">
            <ul>
              {suggestionvalue.map((value) => (
                <li
                  key={value}
                  onClick={() => searchclickfun(value)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  🔍 {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  export default Header;
