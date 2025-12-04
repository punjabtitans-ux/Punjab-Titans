import React from "react";
import Title from "../Uiux/Title";
import Button from "../Uiux/Button";
import { PopularEventsdata } from "@/app/Data/Data";
import Image from "next/image";
import Description from "../Uiux/Description";
const PopularEvents = () => {
  return (
    <div>
      <div className="cus_container py-16">
        <div className="flex justify-between">
          <Title title={"Popular Events"} color={"text-white"} />
          <Button button_name={"Read More"} />
        </div>

        <div className="grid grid-cols-2 pt-12 gap-10">
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
                    <span className="bg-[#2F2E2E] px-6 2xl:px-8 py-1.5 2xl:py-2.5 text-white text-xl rounded-full font-light">
                      {data.event_date}
                    </span>
                  </div>
                  <h2 className="text-[52px] 2xl:text-[60px] text-white leading-[63px] 2xl:leading-[65px] font-black my-8">
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
                <div key={index} className="grid grid-cols-[2fr_4fr] gap-12">
                  <div>
                    <Image
                      src={data.event_poster}
                      alt={`Event${index + 1}`}
                      width={1000}
                      height={500}
                      className="max-w-[242px] 2xl:max-w-[295px]"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="">
                      <span className="bg-[#2F2E2E] px-6 2xl:px-8 py-1.5 2xl:py-2.5 text-white text-xl rounded-full font-light">
                        {data.event_date}
                      </span>
                      <h2 className="text-[42px] 2xl:text-[50px] text-white font-black mt-4 mb-2">
                        {data.event_title}
                      </h2>
                      <span className="text-lg 2xl:text-xl text-secondary font-light line-clamp-3">
                        {data.event_description}
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularEvents;
