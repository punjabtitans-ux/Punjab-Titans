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
  return (
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${footerbg.src})` }}
    >
      <div className="py-4 bg-primary border-b-2 border-[#DDBE68] mb-8">
        <div className="max-w-[95%] m-auto">
          <div className="md:max-w-[90%] m-auto flex flex-col md:flex-row items-center justify-between">
            <div>
              <p className="text-sm md:text-base text-white">
                © Punjab Titans 2025 All rights reserved
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-end items-center gap-3 md:gap-18">
              <div className="flex gap-4">
                <Link href={"/terms-and-conditions"}>
                  <span className="text-sm md:text-base text-white">
                    Terms of Service
                  </span>
                </Link>
                <Link href={"/privacy-policy"}>
                  <span className="text-sm md:text-base text-white">
                    Privacy Policy
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-3 md:gap-6">
                <Link target="_blank" href={"https://www.instagram.com/punjabtitansofficial/"}>
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={1000}
                    height={500}
                    className="max-w-[18px] md:max-w-[22px]"
                  />
                </Link>
                <Link target="_blank" href={"https://www.youtube.com/channel/UCrdoKCkBQTYfGQVOhFbNAwA"}>
                  <Image
                    src={youtube}
                    alt="youtube"
                    width={1000}
                    height={500}
                    className="max-w-[24px] md:max-w-[29px]"
                  />
                </Link>
                <Link target="_blank" href={"https://www.facebook.com/profile.php?id=61583443735600"}>
                  <Image
                    src={facebook}
                    alt="facebook"
                    width={1000}
                    height={500}
                    className="max-w-[10px] md:max-w-3"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
