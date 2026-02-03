import React from "react";
import Title from "../Uiux/Title";
import Button from "../Uiux/Button";
import Image from "next/image";
import Description from "../Uiux/Description";
import { PopularEventsdata } from "../../Data/Data";
const PopularEvents = () => {
  return (
    <div>
      <div className="cus_container pt-12 md:pt-16 md:pb-16">
        <div className="flex justify-center md:justify-between">
          <Title title={"Popular Events"} color={"text-white text-center md:text-start"} />
          <div className="hidden md:block">
            <Button button_name={"Read More"} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 pt-6 md:pt-12 gap-6 lg:gap-10">
          <div>
            {PopularEventsdata.map((data, index) =>
              data.id === 1 ? (
                <div className="" key={index}>
                  <Image
                    src={data.event_poster}
                    alt={`Event${index + 1}`}
                    width={1000}
                    height={500}
                    className=""
                  />
                  <div className="mt-8">
                    <span className="bg-[#2F2E2E] px-4 md:px-6 2xl:px-8 py-1 md:py-1.5 2xl:py-2.5 text-white text-sm md:text-base lg:text-xl rounded-full font-light">
                      {data.event_date}
                    </span>
                  </div>
                  <h2 className="text-[25px] md:text-[34px] lg:text-[45px] xl:text-[52px] 2xl:text-[60px] text-white leading-[35px] md:leading-[45px] lg:leading-[55px] xl:leading-[63px] 2xl:leading-[65px] font-black my-4 xl:my-8">
                    {data.event_title}
                  </h2>
                  <Description
                    description={data.event_description}
                    color={"text-secondary"}
                  />
                </div>
              ) : null
            )}
          </div>
          <div className="grid gap-6">
            {PopularEventsdata.slice(1, PopularEventsdata.length).map(
              (data, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[2fr_4fr] gap-4 lg:gap-8 xl:gap-12"
                >
                  <div className="flex">
                    <Image
                      src={data.event_poster}
                      alt={`Event${index + 1}`}
                      width={1000}
                      height={500}
                      className="max-w-[161px] md:max-w-[150px] lg:max-w-[190px] xl:max-w-[242px] 2xl:max-w-[295px] my-auto"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="">
                      <span className="bg-[#2F2E2E] px-4 md:px-6 2xl:px-8 py-1 md:py-1.5 2xl:py-2.5 text-white text-[12px] lg:text-sm xl:text-lg 2xl:text-xl rounded-full font-light">
                        {data.event_date}
                      </span>
                      <h2 className="text-2xl lg:text-[30px] xl:text-[42px] 2xl:text-[50px] text-white font-black mt-2 lg:mt-1 mb-1 xl:mt-4 xl:mb-2">
                        {data.event_title}
                      </h2>
                      <span className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-secondary font-light line-clamp-3">
                        {data.event_description}
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="md:hidden  pt-6 flex justify-center">
            <Button button_name={"Read More"} />
          </div>
      </div>
    </div>
  );
};

export default PopularEvents;
