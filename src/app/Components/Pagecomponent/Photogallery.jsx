'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { photosdata } from "@/app/Data/Data";

const ITEMS_PER_PAGE = 12;
const Photogallery = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(photosdata.length / ITEMS_PER_PAGE);
  
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentData = photosdata.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  return (
    <div className="py-6 cus_container">
      <div className="flex items-center gap-2">
        <Image
          src={"/icons/home.svg"}
          alt=""
          width={1000}
          height={500}
          className="max-w-[20px]"
        />
        <span className="text-[#E0C36D] text-lg"> / Photos</span>
      </div>
      <div className="mt-12 max-w-2xl grid grid-cols-2 rounded-lg border-2 border-white">
        <Link href="/photos">
          <div className="bg-primary rounded-l-lg cursor-pointer text-white text-lg font-semibold text-center py-2">
            Photos
          </div>
        </Link>
        <Link href="/videos">
          <div className="bg-white rounded-r-lg cursor-pointer text-black text-lg font-semibold text-center py-2">
            Videos
          </div>
        </Link>
      </div>

      <div className="pt-12 grid grid-cols-4 gap-x-6 gap-y-6">
        {currentData.map((data, index) => (
          <div className="relative" key={index}>
            <Image
              src={data}
              alt="photo"
              width={1000}
              height={500}
              className="rounded-lg"
            />
            <div className="absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0)_100%)] top-0" />
          </div>
        ))}
      </div>

        <div className="flex justify-center items-center gap-6 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded-md disabled:opacity-40 flex gap-3 items-center text-ternary"
              >
                <Image
                 src={'/icons/previous.svg'}
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
                      currentPage === page
                        ? "bg-white text-black"
                        : "text-white"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              </div>
      
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded-md disabled:opacity-40 flex gap-3 items-center text-ternary"
              >
                Next
                <Image
                 src={'/icons/next.svg'}
                 alt=""
                 width={1000}
                 height={500}
                 className="max-w-3.5"
                 />
              </button>
            </div>
    </div>
  );
};

export default Photogallery;
