import React from "react";
import { SquadCard } from "./Squad";
import { squadData } from "../../Data/Data";
import Title from "../Uiux/Title";
const OurTeamTopsection = () => {
  return (
    <div className="py-6 md:py-12">
      <div className="cus_container">
        <div className="text-center">
          <Title title={"OUR Team"} color={"text-ternary"} />
        </div>
        <div className="">
          <div className="pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-6 lg:gap-x-8">
            {squadData.slice(0, 4).map((item) => {
              return (
                <div key={item.id}>
                  <SquadCard
                    player_image={item.player_image}
                    player_name={item.player_name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamTopsection;
