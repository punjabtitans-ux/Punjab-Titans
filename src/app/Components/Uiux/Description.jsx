import React from "react";

const Description = ({ description, color }) => {
  return (
    <p
      className={`text-xl 2xl:text-[22px] leading-7 2xl:leading-8 ${color} `}
      dangerouslySetInnerHTML={{ __html: description }}
    ></p>
  );
};

export default Description;
