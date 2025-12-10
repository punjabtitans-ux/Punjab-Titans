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

const headerpage = [
  { id: 1, page_name: "Home", page_link: "/" },
  { id: 2, page_name: "League", page_link: "/" },
  { id: 3, page_name: "Our Squad", page_link: "/" },
  { id: 4, page_name: "News", page_link: "/" },
  { id: 5, page_name: "Event", page_link: "/" },
  { id: 6, page_name: "Contact Us", page_link: "/" },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { data: session } = useSession();

  const name = session?.user?.name || "";
  const firstLetter = name.charAt(0).toUpperCase();

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (toggle) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [toggle]);

  return (
    <div>
      <div className="bg-primary py-4 2xl:py-5 relative z-50">
        <div className="max-w-[90%] m-auto flex items-center justify-between">
          <div>
            <Image
              src={Logo}
              alt="Logo"
              width={1000}
              height={500}
              className="max-w-[65px] md:max-w-[70px] lg:max-w-[90px] 2xl:max-w-[107px] absolute top-3 2xl:top-4 z-1002"
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
                src={toggle ? crossicon : menu}
                alt="menu"
                width={1000}
                height={500}
                className="max-w-8"
              />
              <span className="text-white text-xl hidden md:flex">Menu</span>
            </div>

            {/* ===================== USER AVATAR SECTION ===================== */}
            {!session ? (
              <div
                className="w-[41px] md:w-[51px] 2xl:w-[61px] h-[41px] md:h-[51px] 2xl:h-[61px] flex justify-center items-center rounded-full bg-white cursor-pointer"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                <Image
                  src={userIcon}
                  alt="user"
                  width={1000}
                  height={500}
                  className="max-w-7"
                />
              </div>
            ) : (
              <div>
                <div
                  className="w-[41px] md:w-[51px] 2xl:w-[61px] h-[41px] md:h-[51px] 2xl:h-[61px] rounded-full bg-white cursor-pointer flex justify-center items-center text-primary font-bold text-xl"
                  onClick={() => signOut({ callbackUrl: "/" })}
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
          </div>
        </div>
      </div>

      {/* ===================== SLIDE MENU ===================== */}
      <div
        className={`bg-primary absolute right-0 ${
          toggle
            ? "translate-x-0 w-full md:w-[70%] lg:w-1/2 2xl:w-[35%] h-screen"
            : "w-0 h-0"
        }
        top-[73px] lg:top-[82px] 2xl:top-[101px] transition-all duration-500 border-t-4 border-white overflow-hidden z-1001`}
      >
        <div className="pt-8 ps-8">
          <ul>
            {headerpage.map((data, index) => (
              <li className="pb-4" key={index}>
                <Link
                  href={data.page_link}
                  className="text-lg md:text-2xl text-white"
                >
                  {data.page_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ps-8">
          <div className="flex md:hidden items-center gap-5">
            <Link href={""}>
              <Image src={instagram} alt="instagram" className="max-w-[22px]" />
            </Link>
            <Link href={""}>
              <Image src={youtube} alt="youtube" className="max-w-[29px]" />
            </Link>
            <Link href={""}>
              <Image src={facebook} alt="facebook" className="max-w-3" />
            </Link>
          </div>
        </div>

        <div
          className="hidden lg:block absolute top-[15px] right-6 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <Image
            src={crossicon}
            alt="crossicon"
            width={1000}
            height={500}
            className="max-w-[41px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
