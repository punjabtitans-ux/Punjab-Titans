import React from "react";

const Description = ({ description, color }) => {
  return (
    <p
      className={`text-sm md:text-base lg:text-base xl:text-lg 2xl:text-[22px] leading-6 lg:leading-7 2xl:leading-8 ${color} `}
      dangerouslySetInnerHTML={{ __html: description }}
    ></p>
  );
};

export default Description;
