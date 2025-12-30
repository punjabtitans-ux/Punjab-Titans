"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../../../public/images/Logo.webp";
import Image from "next/image";
import menu from "../../../../public/icons/menu.svg";
import crossicon from "../../../../public/icons/crossicon.svg";
import instagram from "../../../../public/icons/instagram-white.svg";
import youtube from "../../../../public/icons/youtube-white.svg";
import facebook from "../../../../public/icons/facebook-white.svg";
import userIcon from "../../../../public/icons/user.svg";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { headerMenu } from "@/app/Data/Data";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { data: session } = useSession();

  const name = session?.user?.name || "";
  const firstLetter = name.charAt(0).toUpperCase();

  // useEffect(() => {
  //   const scrollbarWidth =
  //     window.innerWidth - document.documentElement.clientWidth;

  //   if (toggle) {
  //     document.body.style.overflow = "hidden";
  //     document.body.style.paddingRight = `${scrollbarWidth}px`;
  //   } else {
  //     document.body.style.overflow = "auto";
  //     document.body.style.paddingRight = "0px";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //     document.body.style.paddingRight = "0px";
  //   };
  // }, [toggle]);

  //455 hour

  return (
    <div className="sticky top-0 z-999">
      <div className="bg-primary">
        <div className="py-2 max-w-[90%] m-auto flex justify-end ">
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
      <div
        className="py-4 2xl:py-5 relative z-50 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/headerbg.webp)` }}
      >
        <div className="max-w-[90%] m-auto flex items-center justify-between">
          <div>
            <Image
              src={Logo}
              alt="Logo"
              width={1000}
              height={500}
              className="max-w-[65px] md:max-w-[70px] lg:max-w-[90px] 2xl:max-w-[107px] absolute top-3 2xl:-top-8 z-1002"
            />
          </div>

          <div className="flex items-center gap-3 md:gap-12">
            <div className="flex items-center gap-6">
              {headerMenu.map((data, index) => (
                <div className="py-4" key={index}>
                  <Link href={data.path}>
                    <span className="text-[19px] text-white">{data.title}</span>
                  </Link>
                </div>
              ))}
            </div>

            {/* ===================== USER AVATAR SECTION ===================== */}
            <Link href={"/login"}>
              <div className="flex items-center gap-4 cursor-pointer">
                {!session ? (
                  <div
                    className="w-7 md:w-8 2xl:w-[50px] h-7 md:h-8 2xl:h-[50px] flex justify-center items-center rounded-full bg-white cursor-pointer"
                    // onClick={() => signIn("google", { callbackUrl: "/" })}
                  >
                    <Image
                      src={userIcon}
                      alt="user"
                      width={1000}
                      height={500}
                      className="max-w-5"
                    />
                  </div>
                ) : (
                  <div>
                    <div
                      className="w-7 md:w-8 2xl:w-[50px] h-7 md:h-8 2xl:h-[50px] rounded-full bg-white cursor-pointer flex justify-center items-center text-primary font-bold text-xl"
                      // onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      {session.user.image ? (
                        <Image
                          src={session.user.image}
                          alt="User Image"
                          width={100}
                          height={100}
                          className="rounded-full w-full h-full object-cover"
                        />
                      ) : (
                        firstLetter
                      )}
                    </div>
                  </div>
                )}

                <span className="text-[19px] text-white">Login</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
