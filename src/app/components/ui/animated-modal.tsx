"use client";

import { Button, Modal } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

export function AnimatedModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        className="bg-indigo-600 text-4xl text-center font-bold rounded-md hover:bg-indigo-700 transition-all p-3 mt-10"
        onClick={() => setOpenModal(true)}
      >
        Buy
      </Button>
      <Modal
        className="bg-gray-700 text-white"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="bg-black-200  text-white border-gray-700 border-none">
          <h2 className="text-white text-xl font-extrabold">Buy your Crypto</h2>
        </Modal.Header>
        <div className="bg-black-200 p-5">
          <div>
            <h2 className="text-xl bg font-semibold text-white py-3">Quantity: </h2>
            <input
              className="w-full h-12 px-4 bg-gray-700 text-white border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="quantity"
              id="quantity"
              placeholder="0.0"
              min={0.01}
            />
          </div>
          <div className="py-5">
            <h2 className="text-xl font-semibold text-white py-3">
              Payment Details:
            </h2>
            
            <div className="flex flex-col justify-around bg-gray-800 p-4 border border-white border-opacity-30 rounded-lg shadow-md max-w-xs mx-auto">
              <div className="flex flex-row items-center justify-between mb-3">
                <input
                  className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2 mb-3 flex-grow"
                  type="text"
                  name="cardName"
                  id="cardName"
                  placeholder="Full Name"
                />
                <div className="flex items-center justify-center relative w-14 h-9 bg-gray-800 border border-white border-opacity-20 rounded-md">
                  <svg
                    className="text-white fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ff9800"
                      d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                    ></path>
                    <path
                      fill="#d50000"
                      d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                    ></path>
                    <path
                      fill="#ff3d00"
                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <input
                  className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                />
                <div className="flex flex-row justify-between">
                  <input
                    className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                    type="text"
                    name="expiryDate"
                    id="expiryDate"
                    placeholder="MM/AA"
                  />
                  <input
                    className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                    type="text"
                    name="cvv"
                    id="cvv"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal.Footer className="bg-black-200 border-none">
          <button
            className="bg-red-500 w-full rounded-md text-center hover:bg-red-800 transition-all text-white font-bold p-3"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>
          <Link
            className="bg-indigo-500 w-full rounded-md text-center hover:bg-indigo-800 transition-all text-white font-bold p-3"
            href="/"
            onClick={() => setOpenModal(false)}
          >
            Pay Now
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
