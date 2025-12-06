"use client";
import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Squaddata } from "../../Data/Data";
import Image from "next/image";
import arrowleft from "../../../../public/icons/Button - Previous slide.svg";
import arrowlright from "../../../../public/icons/Button - Next slide.svg";
import Overallstats from "./Overallstats";
const Squadslider = () => {
  return (
    <div className="bg-primary ">
      <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0.57)_0%,rgba(0,0,0,1)_83%)]">
        <div className="max-w-[1820px] m-auto px-[3%] py-12 ">
          <div className="text-center relative">
            <Title title={"OUR SQUAD"} color={"text-white"} border={true} />
            <div className="pt-5">
              <Description
                description={
                  "The Punjab Titans Squad is a powerful mix of talent, energy, and fearless cricket. With hard-hitting <br/> batters, sharp bowlers, and smart all-rounders, our team is built to dominate"
                }
                color={"text-secondary"}
              />
            </div>
            <div className="flex justify-between pt-4">
              <div className="xl:absolute left-[5%] bottom-0  xl:bottom-[10%]">
                <Image
                  src={arrowleft}
                  alt="left"
                  width={1000}
                  height={500}
                  className="w-[50px] custom-prev cursor-pointer"
                />
              </div>
              <div className="xl:absolute  right-[5%] bottom-0  xl:bottom-[10%]">
                <Image
                  src={arrowlright}
                  alt="left"
                  width={1000}
                  height={500}
                  className="w-[50px] custom-next cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="py-12 2xl:py-16">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              speed={1000}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 6 },
                1680: { slidesPerView: 7 },
              }}
              className="px-10"
            >
              {Squaddata.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#0A0A0A] py-6 px-3 max-w-[80%] m-auto">
                    <Image
                      src={data.player_image}
                      alt={data.player_name}
                      width={1000}
                      height={500}
                      className="max-w-[177px] 2xl:max-w-[197px] m-auto"
                    />
                    <p className="text-lg  xl:text-xl 2xl:text-[22px] text-white text-center pt-4">
                      {data.player_name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="2xl:pb-6">
            <Overallstats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squadslider;
