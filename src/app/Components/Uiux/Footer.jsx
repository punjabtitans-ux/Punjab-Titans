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
            <div className="flex justify-end items-center gap-18">
              <div className="flex gap-4">
                <span className="text-sm md:text-base text-white">
                  Terms of Service
                </span>
                <span className="text-sm md:text-base text-white">
                  Privacy Policy
                </span>
              </div>
              <div className="flex items-center gap-6">
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
      </div>
    </div>
  );
};

export default Footer;
