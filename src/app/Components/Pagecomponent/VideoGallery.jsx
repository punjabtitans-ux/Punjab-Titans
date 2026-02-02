"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { videodata } from "../../Data/Videos";

const ITEMS_PER_PAGE = 12;

const VideoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeVideo, setActiveVideo] = useState(null);

  const totalPages = Math.ceil(videodata.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = videodata.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="py-6 cus_container">
      {/* BREADCRUMB */}
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

      {/* TABS */}
      <div className="mt-6 md:mt-12 max-w-[500px] 2xl:max-w-2xl grid grid-cols-2 rounded-lg border-2 border-white">
        <Link href="/photos">
          <div className="bg-white rounded-l-lg cursor-pointer text-black text-base 2xl:text-lg md:font-semibold text-center py-2">
            Photos
          </div>
        </Link>
        <Link href="/videos">
          <div className="bg-primary rounded-r-lg cursor-pointer text-white text-base 2xl:text-lg md:font-semibold text-center py-2">
            Videos
          </div>
        </Link>
      </div>

      {/* VIDEO GRID */}
      <div className="pt-6 md:pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 lg:gap-x-6 gap-y-3 lg:gap-y-6">
        {currentData.map((data, index) => (
          <Link href={`/videos/${data.page_slug || ''} `} key={index}>
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

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-md disabled:opacity-40 flex gap-3 items-center text-ternary"
        >
          <Image
            src={"/icons/previous.svg"}
            alt=""
            width={1000}
            height={500}
            className="max-w-3.5"
          />
          Previous
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border rounded-md ${
                  currentPage === page ? "bg-white text-black" : "text-white"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-md disabled:opacity-40 flex gap-3 items-center text-ternary"
        >
          Next
          <Image
            src={"/icons/next.svg"}
            alt=""
            width={1000}
            height={500}
            className="max-w-3.5"
          />
        </button>
      </div>

      {/* VIDEO MODAL */}
      {/* {activeVideo && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex justify-center items-center">
          <div className="relative w-[70%] max-w-4xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <video
              src={activeVideo}
              autoPlay
              controls={false}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default VideoGallery;
