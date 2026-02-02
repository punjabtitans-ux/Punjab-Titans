"use client";
import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { spotlightdata } from "../../Data/Data";
import Image from "next/image";
import arrowleft from "../../../../public/icons/Button - Previous slide.svg";
import arrowlright from "../../../../public/icons/Button - Next slide.svg";
import Featured from "./Featured";
const SpotLight = ({feature}) => {
  return (
    <div className="bg-primary">
      <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0.57)_0%,rgba(0,0,0,1)_83%)]">
        <div className="max-w-[1820px] m-auto px-[3%] py-12 md:py-16 ">
          <div className="text-center relative">
            <Title
              title={"In the Spotlight"}
              color={"text-white"}
              border={true}
            />
            <div className="pt-5">
              <Description
                description={
                  "Every shot, every roar, every moment that builds our legacy <br/> this is where Titans shine."
                }
                color={"text-secondary"}
              />
            </div>
            <div className="flex justify-between pt-4">
              <div className="lg:absolute left-[5%] bottom-[10%]">
                <Image
                  src={arrowleft}
                  alt="left"
                  width={1000}
                  height={500}
                  className="w-[50px] custom-prev cursor-pointer"
                />
              </div>
              <div className="lg:absolute  right-[5%] bottom-[10%]">
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

          <div className="pt-6 md:pt-12 lg:pt-16">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              spaceBetween={40}
              breakpoints={{
                320: { slidesPerView: 1 },
                1280: { slidesPerView: 2 },
              }}
              className="px-10"
            >
              {spotlightdata.map((data, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="grid md:grid-cols-2 bg-[#171717] rounded-3xl"
                    key={index}
                  >
                    <Image
                      src={data.spolight_poster}
                      alt="poster"
                      width={1000}
                      height={500}
                      className=""
                    />
                    <div className="px-6 py-6 md:py-0 flex items-center">
                      <div>
                        <h2 className="text-3xl md:text-[35px] 2xl:text-[45px] text-white font-black md:leading-[45px] 2xl:leading-[55px] mb-2">
                          {data.spolight_title}
                        </h2>
                        <span className="text-base 2xl:text-lg text-secondary font-light line-clamp-3">
                          {data.spotlight_description}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {
            feature === false ?
            null :
            <Featured />
          }
          
        </div>
      </div>
    </div>
  );
};

export default SpotLight;
