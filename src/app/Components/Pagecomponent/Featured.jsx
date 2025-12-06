import React from "react";
import Title from "../Uiux/Title";
import featured1 from "../../../../public/images/featured1.webp";
import featured2 from "../../../../public/images/featured2.webp";
import featured3 from "../../../../public/images/featured3.webp";
import featured4 from "../../../../public/images/featured4.webp";
import featured5 from "../../../../public/images/featured5.webp";
import featured6 from "../../../../public/images/featured6.webp";
import Image from "next/image";
const Featured = () => {
  return (
    <div>
      <div className="cus_container pt-12 lg:pt-16">
        <div className="text-center">
          <Title title={"Featured In"} color={"text-white"} />
        </div>

        <div className="max-w-7xl m-auto grid grid-cols-2 md:grid-cols-6 pt-6 md:pt-12 gap-2 md:gap-4">
          {[
            featured1,
            featured2,
            featured3,
            featured4,
            featured5,
            featured6,
          ].map((data, index) => (
            <div className="flex items-center" key={index}>
              <Image
                src={data}
                alt="Featured"
                width={2000}
                height={500}
                className="max-w-[90%] m-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
