import React from "react";
import bannerbg from "../../../../public/images/bannerbg.webp";
import bannerright from "../../../../public/images/bannerright.webp";
import Image from "next/image";
import Description from "../Uiux/Description";
import Bannermarque from "./Bannermarque";
const Banner = () => {
  return (
    <div className="relative md:top-[-60px]">
      {/* <div
        className="bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${bannerbg.src})` }}
      >
        <div className="max-w-[97%] m-auto grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center pt-12">
            <div className="text-center md:text-start">
              <h1 className="title-text">
                Punjabi
              </h1>
              <h3 className="sub-title">
                Aa Gye Oyee
              </h3>
              <Description
                description={
                  "A new chapter begins. New rivalries. New  <br/> heroes. New victories"
                }
                color={"text-secondary"}
              />
            </div>
          </div>
          <div className="relative z-60">
            <Image
              src={bannerright}
              alt="bannerright"
              width={1000}
              height={500}
              className=""
            />
          </div>
        </div>
      </div> */}
       <div>
        <Image
         src={'/videos/bannermain.gif'}
         alt=""
         width={1000}
         height={500}
         className="w-full h-[50vh] object-cover md:h-auto"
         />
       </div>
      <div className="absolute overflow-hidden w-full -bottom-1 md:-bottom-4 lg:bottom-1">
        <Bannermarque />
      </div>
    </div>
  );
};

export default Banner;
