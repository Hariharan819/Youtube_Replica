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
  return (
    <div>
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + idofvideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watchpage;
