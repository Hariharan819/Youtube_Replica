import React from "react";
import { useParams } from "react-router";

const Searchvideoplay = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Watchpagevideo</div>;
};

export default Searchvideoplay;
