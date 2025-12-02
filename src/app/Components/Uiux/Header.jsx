import React from "react";
import Logo from "../../../../public/images/Logo.webp";
import Image from "next/image";
import menu from "../../../../public/icons/menu.svg";
import instagram from "../../../../public/icons/instagram-white.svg";
import youtube from "../../../../public/icons/youtube-white.svg";
import facebook from "../../../../public/icons/facebook-white.svg";
import user from "../../../../public/icons/user.svg";
import Link from "next/link";
const Header = () => {
  return (
    <div className="bg-primary py-4 2xl:py-5">
      <div className="max-w-[90%] m-auto flex items-center justify-between">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={1000}
            height={500}
            className="max-w-[90px] 2xl:max-w-[107px] absolute top-3 2xl:top-4"
          />
        </div>
        <div className="flex items-center gap-12">
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
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
             src={menu}
             alt="menu"
             width={1000}
             height={500}
             className="max-w-8"
             />
             <span className="text-white text-xl">Menu</span>
          </div>
          <div className="w-[51px] 2xl:w-[61px] h-[51px] 2xl:h-[61px] flex justify-center items-center rounded-[50%] bg-white cursor-pointer">
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
    </div>
  );
};

export default Header;
