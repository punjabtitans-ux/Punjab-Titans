import Image from "next/image";
import React from "react";
import arrowlright from "../../../../public/icons/buttonarrowblack.svg";
const Button = ({button_name}) => {
  return (
    <button
      className={`border-none relative text-base md:text-xl outline-none bg-white transition-all duration-500 group flex h-max ps-4 md:ps-6  hover:ps-[50px] md:hover:ps-[60px]  gap-2 py-3 md:py-4 pe-[50px] md:pe-[60px] hover:pe-4 md:hover:pe-6 items-center rounded-full cursor-pointer`}
      fdprocessedid="rsvn2"
    >
      {button_name}
      <Image
        src={arrowlright}
        alt="arrow"
        width={1000}
        height={500}
        className="absolute left-[70%] max-w-10 md:max-w-[50px] group-hover:left-1 transition-all duration-500"
      />
      
    </button>
  );
};

export default Button;
