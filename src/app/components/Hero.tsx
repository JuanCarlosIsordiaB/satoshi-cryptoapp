import React from "react";
import { Spotlight } from "./ui/Spotlight";
import NavBar from "./NavBar";
import { FlipWords } from "./ui/flip-words";
import { FlipWordsDemo } from "./ui/words-helper";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vw] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vw] w-[50vw]" fill="white" />
      </div>
      <div className="flex justify-center">
        <div className="max-w-[89vw]">
          <FlipWordsDemo />
          <p className="text-slate-400 my-9 text-xs md:text-lg ml-3 md:ml-0 ">
            Welcome to new Web 3 app! <br /> Where you can buy, manage your
            cryptocurrency in the best way.
          </p>
          <form className="flex ">
            <input
              type="text"
              placeholder="Find your Crypto"
              className="px-1 py-3  w-full max-w-md border-none"
            />
            <button className="text-white bg-indigo-600 px-2 py-3 hover:bg-indigo-900 transition-all">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
