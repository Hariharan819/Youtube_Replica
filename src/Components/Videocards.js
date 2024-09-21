import React from "react";

const Videocards = ({ data }) => {
  console.log(data);
  const {snippet,statistics}=data;
  const {channelTitle,title,thumbnails}=snippet;
  return <div>
    <img src={thumbnails.medium.url} alt="" />
    <ul>
      <li>{channelTitle}</li>
      <li>{title}</li>
      <li>{statistics.viewCount}</li>
    </ul>
  </div>;
};

export default Videocards;
