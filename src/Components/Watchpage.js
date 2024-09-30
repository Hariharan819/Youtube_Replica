import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../Redux-Utilis/ToggleSlice";
import { useParams } from "react-router";

const Watchpage = () => {
  const { params } = useParams();
  const dispatch = useDispatch();
  console.log(params)
  useEffect(() => {
    dispatch(closemenu());
  }, []);
  return <div>
    
  </div>;
};

export default Watchpage;
