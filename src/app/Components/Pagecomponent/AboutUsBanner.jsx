import Image from "next/image";
import React from "react";
import Bannermarque from "./Bannermarque";

const AboutUsBanner = () => {
  return (
    <div>
      <Image
        src={"/images/aboutusbanner.webp"}
        alt=""
        width={5000}
        height={500}
        className="w-full"
      />
      <div className="">
        <Bannermarque />
      </div>
    </div>
  );
};

export default AboutUsBanner;
