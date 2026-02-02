"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { videodata } from "../../Data/Videos";
import Image from "next/image";
import NewsFeatureCard from "@/app/Components/Uiux/NewsFeatureCard";
import { newsdata } from "../../Data/NewsData";
import Link from "next/link";
const VideoDetail = () => {
  const currentpath = usePathname().split("/").pop();
  console.log(currentpath);
  const currentpage = videodata.find(
    (video) => video.page_slug === currentpath,
  );
  console.log("currentpage", currentpage);
  if (!currentpage) {
    return (
      <div className="cus_container py-6 text-white h-[70vh]">
        Page Not Found
      </div>
    );
  }
  return (
    <div className="cus_container py-6">
      <div className="flex items-center gap-2">
        <Image
          src={"/icons/home.svg"}
          alt=""
          width={1000}
          height={500}
          className="max-w-[20px]"
        />
        <span className="text-[#E0C36D] text-lg"> / Videos</span>
      </div>
      <div className="pt-6 flex flex-col lg:flex-row gap-5">
        <div className="lg:w-[70%]">
          <iframe
            className="w-full h-[400px] md:h-[500px] xl:h-[600px] rounded-xl"
            src="https://www.youtube.com/embed/nsj3N1zG0ro?rel=0&modestbranding=1&playsinline=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />

          <h1 className="text-[22px] lg:text-2xl 2xl:text-[26px] text-white pt-12">
            {currentpage.title}
          </h1>
        </div>
        <div className="lg:w-[30%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-4 lg:gap-x-6 gap-y-6 lg:max-w-[80%] m-auto">
            {newsdata.slice(0, 2).map((data) => (
              <NewsFeatureCard
                key={data.id}
                id={data.id}
                poster={data.poster}
                title={data.title}
                category={data.category}
                // startingslug={"news"}
                useDetailCard={true}
                slug={data.page_link || ""}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xl 2xl:text-2xl text-ternary pt-6 md:pt-12">
          Latest Videos
        </h4>
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

export default VideoDetail;
