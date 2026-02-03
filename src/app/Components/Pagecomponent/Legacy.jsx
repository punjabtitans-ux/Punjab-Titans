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
        <div className="cus_container pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
          <div className="text-center">
            <h2 className="text-[30px] md:text-[90px] lg:text-[120px] 2xl:text-[150px] leading-[40px] md:leading-[120px] 2xl:leading-[162px] text-ternary font-black uppercase">
              Our Legacy
            </h2>
            <p className="max-w-2xl m-auto pt-2 md:pt-6 text-base  md:text-xl lg:text-2xl 2xl:text-3xl text-secondary">
              Built on passion, powered by victories, and driven by an
              unbreakable Titan spirit
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-0  py-6 md:py-14 2xl:py-18">
            <div className="text-center">
              <h2 className="text-[30px] md:text-[95px] lg:text-[120px] 2xl:text-[150px] leading-[41px] md:leading-[105px] lg:leading-[130px] 2xl:leading-[162px] text-white font-black uppercase">
                1X
              </h2>
              <p className="max-w-2xl m-auto md:pt-2 text-[14px] md:text-2xl lg:text-3xl text-ternary uppercase">
                League titles
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-[30px] md:text-[95px] lg:text-[120px] 2xl:text-[150px] leading-[41px] md:leading-[105px] lg:leading-[130px] 2xl:leading-[162px] text-white font-black uppercase">
                2025
              </h2>
              <p className="max-w-2xl m-auto md:pt-2 text-[14px] md:text-2xl lg:text-3xl text-ternary uppercase">
                Established
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-[30px] md:text-[95px] lg:text-[120px] 2xl:text-[150px] leading-[41px] md:leading-[105px] lg:leading-[130px] 2xl:leading-[162px] text-white font-black uppercase">
                2X
              </h2>
              <p className="max-w-2xl m-auto md:pt-2 text-[14px] md:text-2xl lg:text-3xl text-ternary uppercase">
                Champions
              </p>
            </div>
          </div>
        </div>

        <div className="pb-18 lg:pb-24 2xl:pb-32 pt-8">
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default Legacy;
