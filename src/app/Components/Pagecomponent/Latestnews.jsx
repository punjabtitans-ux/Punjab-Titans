'use client'
import React from "react";
import Title from "../Uiux/Title";
import Button from "../Uiux/Button";
import { newsupdatedata } from "../../Data/Data";
import Image from "next/image";
import googleplay from "../../../../public/images/googleplay.webp";
import googleapp from "../../../../public/images/googleapp.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Latestnews = () => {
  return (
    <div>
      <div className="cus_container pt-12 md:pt-16">
        <div className="flex flex-col items-center lg:flex-row justify-between gap-2 lg:gap-0">
          <Title
            title={"Latest News & Updates"}
            color={"text-white text-center lg:text-start"}
          />
          <div className=" hidden lg:flex justify-end w-full lg:w-auto">
            <Button button_name="Read More" />
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-6 md:pt-12">
          {newsupdatedata.map((data, index) => (
            <div className="relative" key={index}>
              <Image
                src={data.newsposter}
                alt={data.newstitle}
                width={1000}
                height={500}
                // className="max-h-[350px] object-cover md:max-h-[380px] xl:max-w-full"
              />
              <div className="absolute flex flex-col justify-center w-full bottom-0 px-2 2xl:px-4 text-center items-center h-[30%] bg-[linear-gradient(0deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0)_100%)]">
                <h4 className="text-2xl 2xl:text-[27px] font-bold text-white">
                  {data.newstitle}
                </h4>
                <p className="text-sm 2xl:text-base text-secondary font-bold">
                  {data.news_description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 md:pt-12 lg:pt-16 block md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            spaceBetween={10}
            breakpoints={{
              320: { slidesPerView: 2 },
              1280: { slidesPerView: 2 },
            }}
            className="px-10"
          >
            {newsupdatedata.map((data, index) => (
              <SwiperSlide key={index} className="pb-4">
                <div className="relative pb-3 shadow-[0px_2px_0px_#fff] rounded-3xl" key={index}>
                  <Image
                    src={data.newsposter}
                    alt={data.newstitle}
                    width={1000}
                    height={500}
                    // className="max-h-[350px] object-cover md:max-h-[380px] xl:max-w-full"
                  />
                  <div className="absolute flex flex-col justify-end w-full bottom-0 px-2 2xl:px-4 text-center items-center h-[50%] bg-[linear-gradient(0deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0)_100%)] pb-3 rounded-3xl">
                    <h4 className="text-sm 2xl:text-[27px] md:font-bold text-white">
                      {data.newstitle}
                    </h4>
                    <p className="text-[10px] 2xl:text-base text-secondary md:font-bold line-clamp-2">
                      {data.news_description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className=" lg:hidden flex justify-center w-full pt-6">
          <Button button_name="Read More" />
        </div>
        <div className="mt-8 bg-primary py-4 px-4 md:px-8 flex gap-4 md:gap-0 flex-row justify-between items-center rounded-2xl">
          <h5 className="text-[10px] md:text-2xl lg:text-3xl text-white m-0">
            Download the app
          </h5>

          <div className="flex justify-between gap-3">
            <Image
              src={googleplay}
              alt="googleplay"
              width={1000}
              height={500}
              className="max-w-[90px] md:max-w-[138px] 2xl:max-w-[168px]"
            />
            <Image
              src={googleapp}
              alt="googleapp"
              width={1000}
              height={500}
              className="max-w-[90px] md:max-w-[138px] 2xl:max-w-[168px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestnews;
