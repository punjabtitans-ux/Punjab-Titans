import Image from "next/image";
import React from "react";
import Title from "../Uiux/Title";

const AboutUsLegend = () => {
  return (
    <div className="py-6 md:py-12 cus_container">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-2">
        <Image
          src={"/icons/home.svg"}
          alt=""
          width={1000}
          height={500}
          className="max-w-[20px]"
        />
        <span className="text-[#E0C36D] text-lg"> / About</span>
      </div>

      <div className="text-center pt-4">
        <Title
          title={`ABOUT <span class='text-ternary'> LEGENDS'S 90 </span> LEAGUE`}
          color={"text-white"}
        />
      </div>
      <p className="text-base 2xl:text-xl text-white pt-5 md:pt-10 text-center md:text-start">
        <span className="text-ternary">Punjab Titans </span> have proudly
        entered the electrifying world of Legend90, the high-octane 90-ball
        cricket league that brings legends and fierce competition together on
        one stage. Representing the passion, grit, and fighting spirit of
        Punjab, the Titans are ready to make their mark in this thrilling new
        format.
        <br />
        <br />
        Built on a foundation of experience, power-packed performances, and
        smart cricketing minds, Punjab Titans bring together seasoned
        campaigners and match-winners who know how to rise to the occasion.
        Every game promises explosive batting, sharp bowling, and fearless
        intent as the team embraces the fast-paced nature of Legend90.
        <br />
        As the tournament unfolds, Punjab Titans are set to challenge the best,
        entertain fans, and chase glory with unwavering determination. The
        journey has just begun — and the Titans are here to compete, conquer,
        and create history in the{" "}
        <span className="text-ternary"> Legend90 League.</span>
      </p>
    </div>
  );
};

export default AboutUsLegend;
