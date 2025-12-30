import React from "react";
import Image from "next/image";

const NewsFeatureCard = ({ id, poster, title, category }) => {
  return (
    <div className="rounded-lg" key={id}>
      <div className="relative">
        <Image src={poster} alt="poster" width={1000} height={500} />

        <div className="p-2 w-fit bg-primary rounded-sm absolute -bottom-3.5 left-4">
          <Image src="/icons/clipboard.svg" alt="icon" width={16} height={16} />
        </div>
      </div>

      <div className="py-8 px-4 bg-white rounded-b-lg">
        <h3 className="text-base text-black line-clamp-2 font-semibold">
          {title}
        </h3>

        <p className="text-sm pt-4">{category}</p>
      </div>
    </div>
  );
};

export default NewsFeatureCard;
