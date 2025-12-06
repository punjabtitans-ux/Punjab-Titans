import Image from "next/image";
import Banner from "./Components/Pagecomponent/Banner";
import Squadslider from "./Components/Pagecomponent/Squadslider";
import Latestnews from "./Components/Pagecomponent/Latestnews";
import PopularEvents from "./Components/Pagecomponent/PopularEvents";
import SpotLight from "./Components/Pagecomponent/SpotLight";
import Legacy from "./Components/Pagecomponent/Legacy";

export default function Home() {
  return (
    <div>
      <div className="pt-16">
        <Banner />
        <Squadslider />
        <Latestnews />
        <PopularEvents />
        <SpotLight />
        <Legacy />
      </div>
    </div>
  );
}
