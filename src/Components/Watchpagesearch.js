import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { API_OPTIONS } from "../Utilis/Constant";

const Watchpagesearch = () => {
  const location = useLocation();
  const [queryvalue, setqueryvalue] = useState([]);
  const getQueryParam = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("search");
  };
  const query = getQueryParam();
  // console.log(query);

  const getsuggestion = async () => {
    const api_data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        { query } +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    if (api_data) {
      const json = await api_data?.json();
      setqueryvalue(json?.results);
      console.log(json?.results);
    }
  };

  useEffect(() => {
    getsuggestion();
    // eslint-disable-next-line
  }, [""]);
  return <div className="pt-10">

  </div>;
};

export default Watchpagesearch;
