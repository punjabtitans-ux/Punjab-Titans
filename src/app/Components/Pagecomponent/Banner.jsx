"use client";
import React from "react";
import bannerbg from "../../../../public/images/bannerbg.webp";
import bannerright from "../../../../public/images/bannerright.webp";
import Image from "next/image";
import Description from "../Uiux/Description";
import Bannermarque from "./Bannermarque";
import SplitText from "../Uiux/SplitText";

const Banner = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="relative">
      {/* Background Wrapper */}
      <div
        className="bg-cover bg-no-repeat bg-center pt-12 md:pt-0"
        style={{ backgroundImage: `url(${bannerbg.src})` }}
      >
        <div className="max-w-[90%] 2xl:max-w-[97%] m-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
          
          {/* Left Side Content */}
          <div className="flex items-center justify-center">
            <div>
              <SplitText
                text="Panjabi"
                className="title-text"
                delay={200}
                duration={0.9}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 80 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                tag="h1"
                onLetterAnimationComplete={handleAnimationComplete}
              />

              <SplitText
                text="Aa Gye Oyee"
                className="sub-title"
                delay={300}
                duration={1.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                tag="h2"
                textAlign=""
                onLetterAnimationComplete={handleAnimationComplete}
              />

              <Description
                description={
                  "A new chapter begins. New rivalries. New <br/> heroes. New victories"
                }
                color={"text-secondary text-center md:text-start"}
              />
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative z-60">
            <Image
              src={bannerright}
              alt="bannerright"
              width={1000}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute overflow-hidden w-full -bottom-5 xl:bottom-0 2xl:bottom-1">
        <Bannermarque />
      </div>
    </div>
  );
};

export default Banner;
