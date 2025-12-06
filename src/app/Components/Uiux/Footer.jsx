"use client";
import React, { useState } from "react";
import footerbg from "../../../../public/images/Footerbg.webp";
import Logo from "../../../../public/images/Footerlogo.webp";
import Image from "next/image";
import Link from "next/link";
import instagram from "../../../../public/icons/instagram-white.svg";
import youtube from "../../../../public/icons/youtube-white.svg";
import facebook from "../../../../public/icons/facebook-white.svg";
const Footer = () => {
  const [Email, setEmail] = useState("");
  const footerdata = [
    {
      id: 1,
      page_name: "About Us",
      page_link: "",
    },
    {
      id: 2,
      page_name: "Leagues",
      page_link: "",
    },
    {
      id: 3,
      page_name: "News",
      page_link: "",
    },
    {
      id: 4,
      page_name: "Contact Us",
      page_link: "",
    },
  ];
  return (
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${footerbg.src})` }}
    >
      <div className="cus_container py-12 md:py-18 xl:py-24">
        <div className="xl:max-w-[95%] 2xl:max-w-[90%] m-auto flex flex-col md:flex-row gap-4 md:gap-10 2xl:gap-20">
          <Image
            src={Logo}
            alt="Logo"
            width={1000}
            height={500}
            className="max-w-[150px] 2xl:max-w-[202px] object-contain m-auto"
          />
          <div className="grid xl:grid-cols-[2fr_3fr] py-8 2xl:py-12 bg-primary px-6 2xl:px-10 rounded-4xl gap-3 md:gap-6 xl:gap-0">
            <div className="text-center md:text-start">
              <h6 className="text-[27px] 2xl:text-[33px] font-normal text-white">
                Join the Titans Tribe!
              </h6>
              <p className="text-base 2xl:text-lg text-secondary">
                Subscribe to stay ahead with all things Punjab Titans —
                exclusive updates, player news, match highlights, and special
                fan perks. Don’t miss a single moment of the action!
              </p>
            </div>
            <div className="flex xl:justify-end items-start">
              <div className="md:bg-white w-full md:w-[95%] flex justify-between py-1 md:ps-6 pe-1 rounded-2xl">
                <form className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between w-full">
                  <input
                    type="email"
                    name=""
                    id=""
                    className="outline-none lg:w-[50%] text-lg 2xl:text-xl bg-white p-3 rounded-xl"
                    placeholder="Enter Your Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    fdprocessedid="rkyyh7"
                    className="cursor-pointer uppercase text-xl border-none outline-none px-4 lg:px-12 rounded-2xl py-4 bg-black text-white"
                    type="submit"
                  >
                    Subcribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary py-4 md:py-6 2xl:py-10">
        <div className="cus_container">
          <div className="lg:max-w-[90%] m-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
            <div className="flex items-center gap-6 lg:gap-12 xl:gap-20">
              {
                footerdata.map((data,index)=>(
                  <Link
                  key={index}
                   href={data.page_link}>
                   <span className="text-sm md:text-base lg:text-[19px] text-white">{data.page_name}</span>
                  </Link>
                ))
              }
            </div>
              <div className="flex items-center gap-5"> 
            <Link href={""}>
              <Image
                src={instagram}
                alt="instagram"
                width={1000}
                height={500}
                className="max-w-[22px]"
              />
            </Link>
            <Link href={""}>
              <Image
                src={youtube}
                alt="youtube"
                width={1000}
                height={500}
                className="max-w-[29px]"
              />
            </Link>
            <Link href={""}>
              <Image
                src={facebook}
                alt="facebook"
                width={1000}
                height={500}
                className="max-w-3"
              />
            </Link>
          </div>
          </div>
        </div>
      </div>
       <div className="pt-8 md:pt-12 2xl:pt-16 pb-6 2xl:pb-8">
        <div className="cus_container">
          <div className="max-w-[90%] m-auto flex flex-col md:flex-row items-center justify-between">
            <div>
              <p className="text-base text-white">© Punjab Titans 2025 All rights reserved</p>
            </div>
            <div className="flex gap-4 lg:gap-8 xl:gap-16">
              <span className="text-base text-white">Terms of Service</span>
              <span className="text-base text-white">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
