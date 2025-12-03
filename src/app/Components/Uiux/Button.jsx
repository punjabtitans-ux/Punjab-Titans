import Image from "next/image";
import React from "react";
import arrowlright from "../../../../public/icons/buttonarrowblack.svg";
const Button = ({button_name}) => {
  return (
    <button
      className={`border-none text-xl outline-none bg-white flex h-max ps-6 pe-2 gap-2 py-1.5 items-center rounded-full cursor-pointer`}
    >
      {button_name}
      <Image
        src={arrowlright}
        alt="arrow"
        width={1000}
        height={500}
        className="max-w-[50px]"
      />
    </button>
  );
};

export default Button;
