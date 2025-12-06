import React from "react";
import Title from "../Uiux/Title";
import Sponsor1 from "../../../../public/images/Sponsor1.webp";
import Sponsor2 from "../../../../public/images/Sponsor2.webp";
import Sponsor3 from "../../../../public/images/Sponsor3.webp";
import Sponsor4 from "../../../../public/images/Sponsor4.webp";
import Sponsor5 from "../../../../public/images/Sponsor5.webp";
import Sponsor6 from "../../../../public/images/Sponsor6.webp";
import Image from "next/image";
const Sponsors = () => {
  return (
    <div>
      <div className="cus_container lg:pt-12">
        <div className="text-center">
          <Title title={"Our Sponsors"} color={"text-white"} />
        </div>

        <div className="max-w-7xl m-auto grid grid-cols-2 md:grid-cols-6 pt-6 md:pt-12 gap-6">
          {[
            Sponsor1,
            Sponsor2,
            Sponsor3,
            Sponsor4,
            Sponsor5,
            Sponsor6,
          ].map((data, index) => (
            <div className="flex items-center" key={index}>
              <Image
                src={data}
                alt="Featured"
                width={2000}
                height={500}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;