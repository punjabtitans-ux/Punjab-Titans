import React from "react";
import bannerbg from "../../../../public/images/bannerbg.webp";
import bannerright from "../../../../public/images/bannerright.webp";
import Image from "next/image";
import Description from "../Uiux/Description";
import Bannermarque from "./Bannermarque";
const Banner = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-no-repeat bg-center h-screen max-h-[1024px]"
        style={{ backgroundImage: `url(${bannerbg.src})` }}
      >
        <div className="max-w-[97%] m-auto grid grid-cols-2">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-[162px] 2xl:text-[192px] leading-[170px] 2xl:leading-[200px] font-black uppercase text-[#FCF0D6] tracking-[-4%]">
                Punjabi
              </h1>
              <h3 className="text-[100px] 2xl:text-[128px] leading-[110px] 2xl:leading-[138px] font-semibold text-white pb-8">
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
      </div>
      <div className="absolute overflow-hidden w-full bottom-12 2xl:bottom-14">
        <Bannermarque />
      </div>
    </div>
  );
};

export default Banner;
