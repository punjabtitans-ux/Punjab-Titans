import React from "react";
import Featured from "../Components/Pagecomponent/Featured";
import Legacy from "../Components/Pagecomponent/Legacy";
import NewsPost from "../Components/Pagecomponent/NewsPost";

const page = () => {
  return (
    <div>
      <NewsPost />
      <Featured />
      <Legacy />
    </div>
  );
};

export default page;
