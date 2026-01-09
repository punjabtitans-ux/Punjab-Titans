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
  const [openMenu, setOpenMenu] = useState(null);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  useEffect(() => {
    function loadUser() {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }

    loadUser();
    window.addEventListener("user-login", loadUser);

    return () => {
      window.removeEventListener("user-login", loadUser);
    };
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("user-logout"));
  }

  const firstLetter = user?.firstName?.charAt(0).toUpperCase();
  const icons = {
    home: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 11L12 3L21 11V21H3V11Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
    squad: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 18.72a9.1 9.1 0 0 0 3.741-.479q.01-.12.01-.241a3 3 0 0 0-4.692-2.478m.94 3.197l.001.031q0 .337-.037.666A11.94 11.94 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6 6 0 0 1 6 18.719m12 0a5.97 5.97 0 0 0-.941-3.197m0 0A6 6 0 0 0 12 12.75a6 6 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72a9 9 0 0 0 3.74.477m.94-3.197a5.97 5.97 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0a3 3 0 0 1 6 0m6 3a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m-13.5 0a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0"
        />
      </svg>
    ),
    dropdown: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  return (
    <div className="sticky top-0 z-999">
      <div className="bg-primary">
        <div className="py-2 max-w-[90%] m-auto flex justify-end">
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
      <div
        className="py-3 md:py-4 2xl:py-5 relative z-50 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/headerbg.webp)` }}
      >
        <div className="max-w-[90%] m-auto flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Logo"
                width={1000}
                height={500}
                className="max-w-[65px] md:max-w-[70px] lg:max-w-[81px]  xl:max-w-[85px] 2xl:max-w-[107px] absolute -top-5 2xl:-top-8 z-1002"
              />
            </Link>
          </div>

          <div className="flex items-center gap-3 md:gap-4 lg:gap-12">
            <nav className="hidden md:flex gap-6">
              {headerMenu.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {item.hasDropdown === true ? (
                    <p className="flex items-center gap-1 text-white text-base 2xl:text-[18px] cursor-pointer">
                      {item.title}
                      {item.hasDropdown && (
                        <span
                          className={`inline-block transition-transform duration-300 ${
                            openMenu === item.id ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </p>
                  ) : (
                    <Link
                      href={item.path}
                      className="flex items-center gap-1 text-white text-base 2xl:text-[18px]"
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute top-3 2xl:top-[15px] left-0 mt-3 w-36 2xl:w-44 bg-white rounded-xl shadow-xl overflow-hidden
                      transition-all duration-300 origin-top
                      ${
                        openMenu === item.id
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-0 pointer-events-none"
                      }`}
                    >
                      {item.dropdownItems.map((drop, index) => (
                        <Link
                          key={index}
                          href={drop.path}
                          onClick={() => setOpenMenu(false)}
                          className="block px-4 py-2 2xl:py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition"
                        >
                          {drop.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {!user ? (
              <Link href="/login">
                <div className="flex items-center gap-2 2xl:gap-4 cursor-pointer">
                  <div className="w-10 md:w-8 2xl:w-[50px] h-10 md:h-8 2xl:h-[50px] flex justify-center items-center rounded-full bg-white">
                    <Image src={userIcon} alt="user" className="max-w-5" />
                  </div>
                  <span className="hidden md:block text-base 2xl:text-[19px] text-white">
                    Login
                  </span>
                </div>
              </Link>
            ) : (
              <div
                className="flex items-center gap-2 2xl:gap-4 cursor-pointer"
                onClick={handleLogout}
              >
                <div className="w-10 md:w-8 2xl:w-[50px] h-10 md:h-8 2xl:h-[50px] rounded-full bg-white flex justify-center items-center text-primary font-bold text-xl">
                  {firstLetter}
                </div>
                <span className="hidden md:block text-base 2xl:text-[19px] text-white underline">
                  Logout
                </span>
              </div>
            )}

            <button
              onClick={() => setOpen(!open)}
              className={`block md:hidden`}
            >
              {!open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="#fff"
                    d="M10.969 3.219a.574.574 0 1 1 .812.812L8.313 7.5l3.468 3.469l.074.09a.575.575 0 0 1-.796.796l-.09-.074L7.5 8.312l-3.469 3.47a.574.574 0 1 1-.812-.813L6.688 7.5l-3.47-3.469l-.073-.09a.575.575 0 0 1 .796-.797l.09.075L7.5 6.687z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Menu */}

            <nav
              className={`block md:hidden  space-y-2 absolute transition-all duration-300 ${
                open ? "py-5 h-[90vh]" : "overflow-hidden h-0"
              } top-16 right-0 w-[90%]  bg-white`}
            >
              {headerMenu.map((item) => (
                <div key={item.id}>
                  {!item.hasDropdown ? (
                    <Link
                      href={`${item.path}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center  px-4 gap-3 px-3 py-2 rounded-lg text-[15px] font-medium text-black hover:bg-black/5  transition-all duration-500 "
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={1000}
                        height={500}
                        className="max-w-5"
                      />
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      {/* Parent */}
                      <div
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.id ? null : item.id
                          )
                        }
                        className={`flex w-full items-center justify-between px-3 py-2 rounded-lg text-[15px] font-medium  transition-all duration-500  ${
                          openDropdown === item.id
                            ? "bg-primary text-white"
                            : "text-black hover:bg-black/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Image
                            src={item.icon}
                            alt=""
                            width={1000}
                            height={500}
                            className={`max-w-5`}
                          />
                          {item.title}
                        </div>

                        <span
                          className={`transition-transform duration-300 ${
                            openDropdown === item.id ? "rotate-180" : ""
                          }`}
                        >
                          {icons.dropdown}
                        </span>
                      </div>

                      {/* Dropdown */}
                      <div
                        className={`ml-8 overflow-hidden transition-all duration-300 ${
                          openDropdown === item.id
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.dropdownItems.map((drop, i) => (
                          <Link
                            key={i}
                            href={`${drop.path}`}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 py-2 text-[14px] text-black/70 hover:text-black transition"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full" />
                            {drop.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
              <div className="bg-primary">
                <div className="py-2 max-w-[90%] m-auto flex justify-end">
                  <div className="flex items-center gap-5">
                    <Link href="#">
                      <Image
                        src={instagram}
                        alt="instagram"
                        className="max-w-[18px] 2xl:max-w-[22px]"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src={youtube}
                        alt="youtube"
                        className="max-w-[18px] 2xl:max-w-[29px]"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src={facebook}
                        alt="facebook"
                        className="max-w-[18px] 2xl:max-w-[18px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
