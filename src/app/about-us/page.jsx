import React from "react";
import AboutUsBanner from "../Components/Pagecomponent/AboutUsBanner";
import AboutUsLegend from "../Components/Pagecomponent/AboutUsLegend";
import SpotLight from "../Components/Pagecomponent/SpotLight";
import OurTeamTopsection from "../Components/Pagecomponent/OurTeamTopsection";
import PopularEvents from "../Components/Pagecomponent/PopularEvents";
import LestestUpdateFooterCard from "../Components/Pagecomponent/LestestUpdateFooterCard";
import Featured from "../Components/Pagecomponent/Featured";
import Sponsors from "../Components/Pagecomponent/Sponsors";
const page = () => {
  return (
    <div className="pb-12">
      <AboutUsBanner />
      <AboutUsLegend />
      <SpotLight feature={false} />
      <OurTeamTopsection />
      <PopularEvents />
      <LestestUpdateFooterCard />
      <Featured />
      <Sponsors />
    </div>
  );
};

export default page;
