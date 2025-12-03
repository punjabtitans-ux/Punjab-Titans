import Image from "next/image";
import Banner from "./Components/Pagecomponent/Banner";
import Bannermarque from "./Components/Pagecomponent/Bannermarque";
import Squadslider from "./Components/Pagecomponent/Squadslider";
import Latestnews from "./Components/Pagecomponent/Latestnews";

export default function Home() {
  return (
    <div>
      <div className="pt-16">
        <Banner />
        <Squadslider/>
        <Latestnews />
      </div>
    </div>
  );
}
