"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import NewsFeatureCard from "../../Components/Uiux/NewsFeatureCard";
import { newsdata } from "../../Data/NewsData";
const NewsDetail = () => {
  const currentpath = usePathname().split("/").pop();
  console.log(currentpath);


   const currentpage = newsdata.find((news)=>  news.page_link === currentpath)

   console.log("currentpage",currentpage);
   
  // currentpage undifine aa rha 
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
        <span className="text-[#E0C36D] text-lg">
          {" "}
          / {currentpage.bredcrum_title || ''}
        </span>
      </div>
      <h1 className="text-[22px] lg:text-2xl 2xl:text-[26px] text-white pt-12">
        {currentpage.title}
      </h1>

      <p className="text-lg 2xl:text-xl font-normal text-white pt-3">
        Welcome to Punjab Titans (“we”, “our”, “us”). By accessing or using our
        website, you agree to comply with and be bound by the following Terms &
        Conditions. If you do not agree, please do not use our website.
      </p>

      <div className="pt-12 flex gap-5">
        <div className="w-[70%]">
          <p className="text-sm text-white pb-2">{currentpage.created_at}</p>
          <Image
            src={currentpage.poster}
            alt=""
            width={1000}
            height={500}
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>
        <div className="w-[30%]">
          <div className="pt-12 grid grid-cols-1 gap-x-4 lg:gap-x-6 gap-y-6 max-w-[80%] m-auto">
            {newsdata.slice(0, 2).map((data) => (
              <NewsFeatureCard
                key={data.id}
                id={data.id}
                poster={data.poster}
                title={data.title}
                category={data.category}
                // startingslug={'news'}
                useDetailCard={true}
                slug={data.page_link || ''}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-12 text-base 2xl:text-lg font-normal text-white space-y-4"
       dangerouslySetInnerHTML={{__html : currentpage.detail_description || ''}}
      >
        
      </div>

      <div className="pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-6">
        {newsdata.slice(0, 4).map((data) => (
          <NewsFeatureCard
            key={data.id}
            id={data.id}
            poster={data.poster}
            title={data.title}
            category={data.category}
            startingslug={'news'}
            slug={data.page_link || ''}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsDetail;
