import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-5/6 h-1/2 lg:w-3/4 lg:h-2/3 p-4 text-white flex flex-col justify-center gap-3 items-center font-roboto">
      <h1 className="font-bold text-center text-3xl lg:text-5xl flex gap-2 flex-wrap content-center justify-center">
      Your ultimate comic destination 😝
      </h1>
      <h3 className="text-1xl text-center lg:text-2xl sm:px-48">
      Unleash your inner fan as you browse through a treasure trove of illustrated adventures.      </h3>
      <Link to={"/mangas"} className="px-6 w-3/4 lg:w-1/6 py-2 bg-[#323232] rounded hover:opacity-95 text-center">
        Started!
      </Link>
    </section>
  );
};

export default Hero;
