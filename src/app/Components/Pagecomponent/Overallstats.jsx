"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Overallstats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.3,    
  });

  return (
    <div ref={ref} className="cus_container py-6 md:py-16">
      <div className="max-w-6xl m-auto flex flex-wrap justify-center md:grid md:grid-cols-3 gap-3">
        
        <div className="text-center w-[45%] md:w-full">
          <span className="text-lg 2xl:text-xl text-secondary">Over</span>
          <h3 className="text-[30px] md:text-[45px] 2xl:text-[57px] text-white font-black leading-[] md:leading-[45px] 2xl:leading-[57px] md:py-1 2xl:py-1.5">
            {inView && (
              <CountUp start={0} end={600} duration={3} suffix="+" />
            )}
          </h3>
          <span className="text-base md:text-lg 2xl:text-xl text-secondary">International Caps</span>
        </div>

        <div className="text-center w-[45%] md:w-full">
          <span className="text-lg 2xl:text-xl text-secondary">A truly</span>
          <h3 className="text-[30px] md:text-[45px] 2xl:text-[57px] text-white font-black leading-[45px] 2xl:leading-[57px] md:py-1 2xl:py-1.5">
            GLOBAL
          </h3>
          <span className="text-lg 2xl:text-xl text-secondary">Sporting Network</span>
        </div>

        <div className="text-center w-[45%] md:w-full">
          <span className="text-lg 2xl:text-xl text-secondary">Over</span>
          <h3 className="text-[30px] md:text-[45px] 2xl:text-[57px] text-white font-black leading-[] md:leading-[45px] 2xl:leading-[57px] md:py-1 2xl:py-1.5">
            {inView && (
              <CountUp start={0} end={50} duration={3} suffix="m" />
            )}
          </h3>
          <span className="text-lg 2xl:text-xl text-secondary">Social Followers</span>
        </div>

      </div>
    </div>
  );
};

export default Overallstats;
