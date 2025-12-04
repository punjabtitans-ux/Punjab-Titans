import React from "react";
import Sponsors from "./Sponsors";
import Sponsorbg from "../../../../public/images/Sponsorbg.webp";
const Legacy = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Sponsorbg.src})` }}
      >
        <div className="cus_container pt-24 2xl:pt-32">
          <div className="text-center">
            <h2 className="text-[120px] 2xl:text-[150px] leading-[120px] 2xl:leading-[162px] text-ternary font-black uppercase">
              Our Legacy
            </h2>
            <p className="max-w-2xl m-auto pt-6 text-2xl 2xl:text-3xl text-secondary">
              Built on passion, powered by victories, and driven by an
              unbreakable Titan spirit
            </p>
          </div>
          <div className=" grid-cols-3 grid py-14 2xl:py-18">
            <div className="text-center">
              <h2 className="text-[120px] 2xl:text-[150px] leading-[130px] 2xl:leading-[162px] text-white font-black uppercase">
                1X
              </h2>
              <p className="max-w-2xl m-auto pt-2 text-3xl text-ternary uppercase">
                League titles
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-[120px] 2xl:text-[150px] leading-[130px] 2xl:leading-[162px] text-white font-black uppercase">
                2025
              </h2>
              <p className="max-w-2xl m-auto pt-2 text-3xl text-ternary uppercase">
                Established
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-[120px] 2xl:text-[150px] leading-[130px] 2xl:leading-[162px] text-white font-black uppercase">
                2X
              </h2>
              <p className="max-w-2xl m-auto pt-2 text-3xl text-ternary uppercase">
                Champions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-24 2xl:pb-32">
        <Sponsors />
      </div>
    </div>
  );
};

export default Legacy;
