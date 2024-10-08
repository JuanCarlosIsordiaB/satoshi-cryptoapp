"use client";
import Link from "next/link";
import React from "react";
import { useStore } from "../stores/useStore";

const NavBar = () => {
  const { currency, setCurrency } = useStore();
  
  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="flex py-5 text-s md:text-xl text-white justify-between">
      <Link href="/" className="flex items-center">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            d="M13 3h2v2h2v2H9v4h8v2H9v4h8v2h-2v2h-2v-2h-2v2H9v-2H5v-2h2v-4H5v-2h2V7H5V5h4V3h2v2h2zm4 14v-4h2v4zm0-6V7h2v4z"
          />
        </svg>{" "}
        satoshi
        
      </Link>
      <div className="hidden md:flex items-center space-x-2 md:space-x-4">
        <Link href="/" className="hover:bg-slate-900 p-2 rounded-md transition-all">Home</Link>
        <Link href="/" className="hover:bg-slate-900 p-2 rounded-md transition-all">Wallet</Link>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <select
          name=""
          id=""
          className="py-2 rounded-md bg-transparent cursor-pointer"
          value={currency}
          onChange={handleCurrencyChange}
        >
          <option className="bg-violet-900 text-white" value="usd">
            USD
          </option>
          <option className="bg-violet-900 text-white" value="mxn">
            MXN
          </option>
          
        </select>
        <Link href="#" className="hover:underline transition-all">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
