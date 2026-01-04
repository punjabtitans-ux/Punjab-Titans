import Image from "next/image";
import Link from "next/link";
import React from "react";
import { squadData } from "@/app/Data/Data";

export const SquadCard = ({ player_image, player_name }) => {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(/images/profilebg.webp)` }}
    >
      <div className="relative">
        <Image
          src={player_image}
          alt={player_name}
          width={1000}
          height={500}
          className="max-w-[90%] m-auto"
        />

        <div className=" absolute bottom-0 h-full w-full flex items-end bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0)_100%)]">
          <h4
            className="text-base md:text-xl lg:text-2xl 2xl:text-3xl font-extrabold text-white pb-2 pl-2 md:pl-4"
            dangerouslySetInnerHTML={{ __html: player_name }}
          />
        </div>
      </div>
    </div>
  );
};
const Squad = () => {
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
        <span className="text-[#E0C36D] text-lg"> / Squad</span>
      </div>

      {/* TABS */}
      <div className="mt-12 max-w-[500px] 2xl:max-w-2xl grid grid-cols-2 rounded-lg border-2 border-white">
        <Link href="/squad">
          <div className="bg-primary rounded-l-lg cursor-pointer text-white text-base 2xl:text-lg font-semibold text-center py-1.5 2xl:py-2">
            PLAYERS
          </div>
        </Link>
        <Link href="/">
          <div className="bg-white rounded-r-lg cursor-pointer text-black text-base 2xl:text-lg font-semibold text-center py-1.5 2xl:py-2">
            SUPPORT STAFF
          </div>
        </Link>
      </div>

      <div className="pt-12">
        <div className="pt-6">
          <div className="relative">
            <p className="border-t-2 border-[#F0F0F0]"></p>
            <div className="absolute w-full flex justify-center -top-4.5">
              <p className="w-fit py-1 px-5 bg-ternary text-lg 2xl:text-xl font-semibold">
                BATTERS
              </p>
            </div>
          </div>
          <div className="pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-6 lg:gap-x-8">
            {squadData.map((item) => {
              if (item.player_is !== "Batter") {
                return null;
              }
              return (
                <div key={item.id}>
                  <SquadCard
                    player_image={item.player_image}
                    player_name={item.player_name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-24">
          <div className="relative">
            <p className="border-t-2 border-[#F0F0F0]"></p>
            <div className="absolute w-full flex justify-center -top-4.5">
              <p className="w-fit py-1 px-5 bg-ternary text-lg 2xl:text-xl font-semibold">
                ALL ROUNDERS
              </p>
            </div>
          </div>
          <div className="pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-6 lg:gap-x-8">
            {squadData.map((item) => {
              if (item.player_is !== "All-Rounder") {
                return null;
              }
              return (
                <div key={item.id}>
                  <SquadCard
                    player_image={item.player_image}
                    player_name={item.player_name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-24">
          <div className="relative">
            <p className="border-t-2 border-[#F0F0F0]"></p>
            <div className="absolute w-full flex justify-center -top-4.5">
              <p className="w-fit py-1 px-5 bg-ternary text-lg 2xl:text-xl font-semibold">
                WICKET KEEPERS
              </p>
            </div>
          </div>
          <div className="pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-6 lg:gap-x-8">
            {squadData.map((item) => {
              if (item.player_is !== "Wicket Keeper") {
                return null;
              }
              return (
                <div key={item.id}>
                  <SquadCard
                    player_image={item.player_image}
                    player_name={item.player_name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-24">
          <div className="relative">
            <p className="border-t-2 border-[#F0F0F0]"></p>
            <div className="absolute w-full flex justify-center -top-4.5">
              <p className="w-fit py-1 px-5 bg-ternary text-lg 2xl:text-xl font-semibold">
                BOWLERS
              </p>
            </div>
          </div>
          <div className="pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-6 lg:gap-x-8">
            {squadData.map((item) => {
              if (item.player_is !== "Bowler") {
                return null;
              }
              return (
                <div key={item.id}>
                  <SquadCard
                    player_image={item.player_image}
                    player_name={item.player_name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squad;
