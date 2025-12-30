import React from "react";
import Featured from "../Components/Pagecomponent/Featured";
import Legacy from "../Components/Pagecomponent/Legacy";
import FeaturePost from "../Components/Pagecomponent/FeaturePost";

const page = () => {
  return (
    <div>
      <FeaturePost />
      
      <Featured />
      <Legacy />
    </div>
  );
};

export default page;
