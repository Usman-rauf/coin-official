import React from "react";
import Logo from "../public/Assests/Group 2.png";
import Nav3 from "../public/Assests/Asset 1.png";
import Nav4 from "../public/Assests/search.3.png";
import Image from "next/image";
import { useState } from "react";

const NavII = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white dark:bg-black shadow">
        <div className="mx-auto container px-3 md:items-center lg:flex lg:justify-between md:px-8">
          <div className=" flex items-center justify-between py-3 lg:py-5 lg:block">
            <a href="javascript:void(0)" className="flex">
              <Image src={Logo} alt="logo" className="object-contain" />
              <p className="mt-[6px] ml-[10px] dark:text-white text-[23px]">
                Coin Official
              </p>
            </a>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="lg:w-full lg:flex lg:gap-x-72 ">
              <ul className=" ml-[45px] lg:flex mt-2 lg:space-x-6 lg:space-y-0">
                <li className="text-black dark:text-white hover:text-blue-600">
                  <a href="javascript:void(0)">List of coins</a>
                </li>
                <li className="text-black dark:text-white hover:text-blue-600">
                  <a href="javascript:void(0)">Staking</a>
                </li>
                <li className="text-black dark:text-white hover:text-blue-600">
                  <a href="javascript:void(0)">Add coind</a>
                </li>
                <li className="text-black dark:text-white hover:text-blue-600">
                  <a href="javascript:void(0)">Promises</a>
                </li>
                <li className="text-black dark:text-white hover:text-blue-600">
                  <a href="javascript:void(0)">Portfolio</a>
                </li>
              </ul>
              <button class="nav-button self-end text-white  py-2 px-4 rounded">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavII;
