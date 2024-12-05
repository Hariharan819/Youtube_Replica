import React, { useEffect, useState } from "react";
import {
  API_OPTIONS,
  menu_logo,
  searchicon,
  Suggestionapi,
  usericon,
  youtube_logo,
} from "../Utilis/Constant";
import { useDispatch } from "react-redux";
import { togglemenu } from "../Redux-Utilis/ToggleSlice";

const Header = () => {
  const [Querysearch, setQuerysearch] = useState("");
  const [suggestionvalue, setsuggestionvalue] = useState([]);
  const [showsuggestion, setshowsuggestion] = useState(false);

  const dispatch = useDispatch();

  const searchclickfun = (value) => {
    setQuerysearch(value);
    setshowsuggestion(false); // Close suggestion dropdown
  };

  const togglefunc = () => {
    dispatch(togglemenu());
  };

  const handleSearch = () => {
    if (Querysearch.trim()) {
      const query = encodeURIComponent(Querysearch);
      window.location.href = `/watchsearch?search=${query}`; // Navigate to WatchPageSearch
    }
  };

  useEffect(() => {
    getsuggestions();
    // eslint-disable-next-line
  }, [Querysearch]);

  const getsuggestions = async () => {
    if (Querysearch.trim() === "") {
      setsuggestionvalue([]);
      return;
    }

    try {
      const api_data2 = await fetch(Suggestionapi + Querysearch);
      const json2 = await api_data2.json();
      setsuggestionvalue(json2[1]);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  return (
    <div className="bg-white shadow-md overflow-y-hidden w-screen fixed top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-10">
        <div className="flex items-center">
          <img
            src={menu_logo}
            className="h-8 cursor-pointer md:h-6"
            alt="Menu"
            onClick={togglefunc}
          />
          <img
            src={youtube_logo}
            className="h-6 ml-3 md:h-6"
            alt="YouTube Logo"
          />
        </div>

        <div className=" hidden  lg:flex md:flex sm:flex flex-grow justify-between items-center">
          <div className="relative flex items-center 2xl:w-1/2  xl:w-1/2 lg:w-1/2 md:w-3/4 md:mx-[20%] sm:w-3/4 sm:pl-[12%] ">
            <input
              type="text"
              className="border border-gray-300 rounded-l-full px-4 py-2 w-full outline-none text-sm"
              value={Querysearch}
              onChange={(e) => setQuerysearch(e.target.value)}
              onFocus={() => setshowsuggestion(true)}
              onBlur={() => setTimeout(() => setshowsuggestion(false), 150)}
              placeholder="Search"
            />
            <button
              className="bg-gray-100 border border-gray-300 rounded-r-full p-2"
              onClick={handleSearch} // Trigger search on button click
            >
              <img src={searchicon} alt="Search Icon" className="h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <img className="h-8 cursor-pointer" src={usericon} alt="User Icon" />
        </div>
      </div>

      {/* Mobile Search Section */}
      <div className="flex md:hidden sm:hidden lg:hidden xl:hidden 2xl:hidden px-4 py-2">
        <div className="relative flex items-center mx-auto w-full right-0 left-0">
          <input
            type="text"
            className="border border-gray-300 rounded-l-full px-4 py-2 w-full outline-none text-sm"
            value={Querysearch}
            onChange={(e) => setQuerysearch(e.target.value)}
            onFocus={() => setshowsuggestion(true)}
            onBlur={() => setTimeout(() => setshowsuggestion(false), 150)}
            placeholder="Search"
          />
          <button
            className="bg-gray-100 border border-gray-300 rounded-r-full p-2"
            onClick={handleSearch}
          >
            <img src={searchicon} alt="Search Icon" className="h-5" />
          </button>
        </div>
      </div>

      {showsuggestion && (
        <div className="fixed bg-white shadow-md rounded-md mt-1 w-[65%] mx-auto right-0 left-0 md:w-[40%] md:mx-auto md:right-0 md:left-16 lg:mx-auto  lg:right-0 lg:left-16 lg:w-[25%]  xl:w-[25%] 2xl:w-[26%]">
          <ul>
            {suggestionvalue.map((value) => (
              <li
                key={value}
                onMouseDown={() => searchclickfun(value)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-serif"
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
