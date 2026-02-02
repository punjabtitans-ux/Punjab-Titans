import Image from "next/image";
import Link from "next/link";
import React from "react";
import { videodata } from "../../Data/Videos";
import Title from "../Uiux/Title";
import Button from "../Uiux/Button";

const LestestUpdateFooterCard = () => {
  return (
    <div className="py-6 md:py-12">
      <div className="cus_container">
        <div className="flex items-center justify-between pb-4">
          <Title title={"Latest News & Updates"} color={"text-white"} />

          <Button button_name={"Read More"} />
        </div>
        <div className="pt-3 md:pt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 lg:gap-x-6 gap-y-3 lg:gap-y-6">
          {videodata.slice(0, 4).map((data, index) => (
            <Link href={`/videos/${data.page_slug || ""} `} key={index}>
              <div className="relative">
                <div className="relative">
                  <Image
                    src={data.video_thembnel}
                    alt="video thumbnail"
                    width={1000}
                    height={500}
                    className="rounded-lg"
                  />

                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <Image
                      src={"/images/playbtn.webp"}
                      alt="play"
                      width={1000}
                      height={500}
                      className="max-w-12 md:max-w-16 lg:max-w-20 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="py-2 md:py-6 px-2 md:px-4 bg-white rounded-b-lg relative -top-1">
                  <h3 className="text-sm md:text-base text-black line-clamp-3 md:line-clamp-2 font-semibold">
                    {data.title}
                  </h3>
                  <p className="text-[12px] md:text-sm pt-2 md:pt-4">Video</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LestestUpdateFooterCard;
