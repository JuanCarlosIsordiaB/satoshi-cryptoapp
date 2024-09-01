"use client";
import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { FlipWordsDemo } from "./ui/words-helper";
import { useStore } from "../stores/useStore";

const Hero = () => {
  const { coins, getAllCoins } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      await getAllCoins();
      setLoading(false);
    };
    fetchCoins();
  }, [getAllCoins]);

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
        <div className="max-w-[90vw]">
          <FlipWordsDemo />
          <p className="text-slate-400 my-9 text-xs md:text-lg ml-3 md:ml-0">
            Welcome to new Web 3 app! <br /> Where you can buy, manage your
            cryptocurrency in the best way.
          </p>
          <form className="flex">
            <input
              type="text"
              placeholder="Find your Crypto"
              className="px-3 py-3 w-full border-none rounded-l-md"
            />
            <button className="text-white bg-indigo-600 px-2 py-3 hover:bg-indigo-900 transition-all rounded-r-md">
              Search
            </button>
          </form>
        </div>
      </div>
      {/* Crypto Table */}
      {!loading && (
        <div className="text-white mt-28">
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 md:grid-cols-5 text-xs md:text-lg gap-1 text-center font-semibold border-b-2 border-slate-100 pb-2 mb-4">
              <p className="p-6 border-slate-100 hidden md:block">#</p>
              <p className="p-6 border-slate-100">Coins</p>
              <p className="p-6 border-slate-100">Price</p>
              <p className="p-6 border-slate-100">24H Change</p>
              <p className="p-6 border-slate-100 hidden md:block">Market Cap</p>
            </div>
            {coins.map((coin, index) => (
              <div key={coin.id} className="grid grid-cols-3 md:grid-cols-5 text-xs md:text-lg gap-1 text-center items-center border-b border-slate-100 py-2">
                <p className="p-6 hidden md:block">{index + 1}</p>
                <div className="flex items-center space-x-2 ml-5 md:ml-0">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  <p className="p-6">{coin.name}</p>
                </div>
                <p className="p-6">${coin.current_price.toFixed(3)}</p>
                <p className={`p-6 font-semibold ${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {coin.price_change_percentage_24h.toFixed(3)}%
                </p>
                <p className="p-6 hidden md:block">${coin.market_cap.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center h-screen text-white text-xl">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Hero;
