"use client";
import React, { useState } from "react";
import Logo from "../../../../public/images/Logo.webp";
import Image from "next/image";
import menu from "../../../../public/icons/menu.svg";
import instagram from "../../../../public/icons/instagram-white.svg";
import youtube from "../../../../public/icons/youtube-white.svg";
import facebook from "../../../../public/icons/facebook-white.svg";
import user from "../../../../public/icons/user.svg";
import Link from "next/link";

const headerpage = [
  {
    id: 1,
    page_name: "Home",
    page_link: "/",
  },
  {
    id: 2,
    page_name: "League",
    page_link: "/",
  },
  {
    id: 3,
    page_name: "Our Squad",
    page_link: "/",
  },
  {
    id: 4,
    page_name: "News",
    page_link: "/",
  },
  {
    id: 5,
    page_name: "Event",
    page_link: "/",
  },
  {
    id: 6,
    page_name: "Contact Us",
    page_link: "/",
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-primary py-4 2xl:py-5">
      <div className="max-w-[90%] m-auto flex items-center justify-between">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={1000}
            height={500}
            className="max-w-[65px] md:max-w-[70px] lg:max-w-[90px] 2xl:max-w-[107px] absolute top-3 2xl:top-4"
          />
        </div>
        <div className="flex items-center gap-3 md:gap-12">
          <div className="hidden md:flex items-center gap-5">
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
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <Image
              src={menu}
              alt="menu"
              width={1000}
              height={500}
              className="max-w-8"
            />
            <span className="text-white text-xl hidden md:flex">Menu</span>
          </div>
          <div className="w-[41px] md:w-[51px] 2xl:w-[61px] h-[41px] md:h-[51px] 2xl:h-[61px] flex justify-center items-center rounded-[50%] bg-white cursor-pointer">
            <Image
              src={user}
              alt="user"
              width={1000}
              height={500}
              className="max-w-7"
            />
          </div>
        </div>
      </div>

      {/* Menu bar  */}
      <div
        className={`bg-primary  absolute right-0 ${
          toggle
            ? "translate-x-0  w-[35%] h-screen"
            : "!w-0 !h-0 rouneded-[50%]"
        }
        top-[82px] 2xl:top-[101px] transition-all duration-500   border-t-4 border-white overflow-hidden z-[1001]`}
      >
        <div className="pt-8 ps-8">
          <ul>
            {headerpage.map((data, index) => (
              <li className="pb-4" key={index}>
                <Link href={data.page_link} className="text-2xl text-secondary">
                  {data.page_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
