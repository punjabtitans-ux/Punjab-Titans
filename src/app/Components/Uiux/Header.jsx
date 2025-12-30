"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../../public/images/Logo.webp";
import instagram from "../../../../public/icons/instagram-white.svg";
import youtube from "../../../../public/icons/youtube-white.svg";
import facebook from "../../../../public/icons/facebook-white.svg";
import userIcon from "../../../../public/icons/user.svg";

import { headerMenu } from "@/app/Data/Data";

const Header = () => {
  const [user, setUser] = useState(null);

  // 🔹 USER LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔹 LOGOUT
  function handleLogout() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  const firstLetter = user?.firstName?.charAt(0).toUpperCase();

  return (
    <div className="sticky top-0 z-999">
      {/* ================= TOP SOCIAL BAR ================= */}
      <div className="bg-primary">
        <div className="py-2 max-w-[90%] m-auto flex justify-end">
          <div className="flex items-center gap-5">
            <Link href="#">
              <Image src={instagram} alt="instagram" className="max-w-[22px]" />
            </Link>
            <Link href="#">
              <Image src={youtube} alt="youtube" className="max-w-[29px]" />
            </Link>
            <Link href="#">
              <Image src={facebook} alt="facebook" className="max-w-[18px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div
        className="py-4 2xl:py-5 relative z-50 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/headerbg.webp)` }}
      >
        <div className="max-w-[90%] m-auto flex items-center justify-between">
          {/* LOGO */}
          <div>
            <Image
              src={Logo}
              alt="Logo"
              width={1000}
              height={500}
              className="max-w-[65px] md:max-w-[70px] lg:max-w-[90px] 2xl:max-w-[107px] absolute top-3 2xl:-top-8 z-1002"
            />
          </div>

          {/* MENU + USER */}
          <div className="flex items-center gap-3 md:gap-12">
            {/* MENU */}
            <div className="flex items-center gap-6">
              {headerMenu.map((data, index) => (
                <div className="py-4" key={index}>
                  <Link href={data.path}>
                    <span className="text-[19px] text-white">
                      {data.title}
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* ================= USER SECTION ================= */}
            {!user ? (
              <Link href="/login">
                <div className="flex items-center gap-4 cursor-pointer">
                  <div className="w-7 md:w-8 2xl:w-[50px] h-7 md:h-8 2xl:h-[50px] flex justify-center items-center rounded-full bg-white">
                    <Image
                      src={userIcon}
                      alt="user"
                      className="max-w-5"
                    />
                  </div>
                  <span className="text-[19px] text-white">Login</span>
                </div>
              </Link>
            ) : (
              <div
                onClick={handleLogout}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="w-7 md:w-8 2xl:w-[50px] h-7 md:h-8 2xl:h-[50px] rounded-full bg-white flex justify-center items-center text-primary font-bold text-xl">
                  {firstLetter}
                </div>
                <span className="text-[19px] text-white">Logout</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
