import React from "react";
import Photogallery from "../Components/Pagecomponent/Photogallery";
import Featured from "../Components/Pagecomponent/Featured";
import Sponsors from "../Components/Pagecomponent/Sponsors";

const page = () => {
  return (
    <div>
      <Photogallery />
      <Featured />
      <div className="pb-16">
        <Sponsors />
      </div>
    </div>
  );
};

export default page;
