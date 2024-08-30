import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["safe",  "fast", "easy"];

  return (
    <div className="h-[5rem] md:h-[10rem]  flex justify-center items-center ">
      <div className="text-4xl md:text-7xl  font-semibold  text-white">
        Get your crypto {<br/>}
        <FlipWords words={words} className="text-indigo-500 text-4xl md:text-7xl" /> <br />
        with us
      </div>
    </div>
  );
}
