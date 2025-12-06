import React from "react";
import Title from "../Uiux/Title";
import Button from "../Uiux/Button";
import { newsupdatedata } from "../../Data/Data";
import Image from "next/image";
import googleplay from "../../../../public/images/googleplay.webp";
import googleapp from "../../../../public/images/googleapp.webp";
const Latestnews = () => {
  return (
    <div>
      <div className="cus_container pt-16">
        <div className="flex flex-col items-center lg:flex-row justify-between gap-2 lg:gap-0">
          <Title title={"Latest News & Updates"} color={"text-white text-center lg:text-start"} />
          <div className=" hidden lg:flex justify-end w-full lg:w-auto">

            <Button button_name="Read More" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-6 md:pt-12">
          {newsupdatedata.map((data, index) => (
            <div className="relative" key={index}>
              <Image
                src={data.newsposter}
                alt={data.newstitle}
                width={1000}
                height={500}
                className=""
              />
              <div className="absolute flex flex-col justify-center w-full bottom-0 px-4 text-center items-center h-[30%] bg-[linear-gradient(0deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0)_100%)]">
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
        <div className=" lg:hidden flex justify-center w-full pt-6">

            <Button button_name="Read More" />
          </div>
        <div className="mt-8 bg-primary py-4 px-8 flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center rounded-2xl">
          <h5 className="text-2xl md:text-3xl text-white m-0">Download the app</h5>

          <div className="flex justify-between gap-3">
            <Image
              src={googleplay}
              alt="googleplay"
              width={1000}
              height={500}
              className="max-w-[138px] 2xl:max-w-[168px]"
            />
            <Image
              src={googleapp}
              alt="googleapp"
              width={1000}
              height={500}
              className="max-w-[138px] 2xl:max-w-[168px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestnews;
