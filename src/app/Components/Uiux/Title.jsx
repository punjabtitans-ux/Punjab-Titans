import React from "react";

const Title = ({ title, color, border }) => {
  return (
    <div className="flex flex-col items-center">
      <h2
        className={`uppercase  text-[38px] md:text-[48px] xl:text-[58px] 2xl:text-[70px] laeding-[38px]  md:leading-[49px] xl:leading-[58px] 2xl:leading-[70px] ${color} font-black ${
          border ? "pb-8" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {border ? (
        <p className="w-28 border-t-2 border-secondary border-solid"></p>
      ) : null}
    </div>
  );
};

export default Title;
