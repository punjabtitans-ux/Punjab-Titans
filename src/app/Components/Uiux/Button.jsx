import Image from "next/image";
import React from "react";
import arrowlright from "../../../../public/icons/buttonarrowblack.svg";
const Button = ({button_name}) => {
  return (
    <button
      className={`border-none relative text-[15px] md:text-xl outline-none bg-white transition-all duration-500 group flex h-max ps-3 md:ps-6  hover:ps-[45px] md:hover:ps-[60px]  gap-2 py-2.5 md:py-4 pe-[45px] md:pe-[60px] hover:pe-3 md:hover:pe-6 items-center rounded-full cursor-pointer`}
      fdprocessedid="rsvn2"
    >
      {button_name}
      <Image
        src={arrowlright}
        alt="arrow"
        width={1000}
        height={500}
        className="absolute left-[70%] max-w-9 md:max-w-[50px] group-hover:left-1 transition-all duration-500"
      />
      
    </button>
  );
};

export default Button;
