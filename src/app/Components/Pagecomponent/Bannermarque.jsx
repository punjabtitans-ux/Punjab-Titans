import React from "react";
import Marquee from "react-fast-marquee";
const Bannermarque = () => {
  return (
    <div className=" bg-primary">
      <div className=" py-6 2xl:py-10 bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(255,255,255,0)_100%)]">
        <Marquee>
          {[
            "Playing in Legends 90",
            "Playing in Legends 90",
            "Playing in Legends 90",
            "Playing in Legends 90",
            "Playing in Legends 90",
            "Playing in Legends 90",
            "Playing in Legends 90",
            "Playing in Legends 90",
            "Playing in Legends 90",
            "Playing in Legends 90",
            "Playing in Legends 90",
            "Playing in Legends 90",
          ].map((data, index) => (
            <div className="text-sm text-white ps-12" key={index}>
              {data}
              <span className="ms-10 w-0.5 h-2 text-secondary">I</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Bannermarque;
