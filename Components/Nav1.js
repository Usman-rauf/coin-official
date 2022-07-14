import React from 'react'
import Nav2 from "../public/Assests/sun.png";
import Image from "next/image";
import Nav from "../public/Assests/nav1.png";
import { useState } from 'react';
import HomeBody from './HomeBody';
import Footer from './Footer';
import NavII from './NavII';
import dark from '../public/Assests/moon.png'
import Navigation from './navigation';




const NavI = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
  return (
    <div className={isActive?"dark":""}>
      <div className="bg-[url('/Assests/BG_Light.png')] dark:bg-[url('/Assests/BG.png')] bg-no-repeat bg-center">
        <nav className=" border-gray-200 sm:px-4 py-1.5 ">
        <div className="container px-5  flex flex-wrap justify-between items-center mx-auto">
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full lg:block md:w-auto" id="mobile-menu">
            <div className=" grid grid-cols-12 ">
              <ul className="flex col-span-8 my-auto flex-col  md:flex-row md:space-x-8  md:text-sm md:font-medium">
                <li>
                  <a
                    href="#"
                    className=" text-[14px] py-2 pr-4 pl-3 text-[#A968E9] bg-blue-700 rounded md:bg-transparent  md:p-0  flex items-center flex-nowrap"
                    aria-current="page"
                  >
                    Coin Official{" "}
                    <span className="text-black dark:text-white ml-2 text-[14px]">$0.79</span>
                    <span className="text-[#3FB791] text-[8px]"> +0.79% </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-[14px] py-2 pr-4 pl-3 text-[#F7931A] bg-blue-700 rounded md:bg-transparent  md:p-0 flex items-center"
                    aria-current="page"
                  >
                    BTC{" "}
                    <span className="text-[black] dark:text-[white] ml-1 text-[14px]">
                      $21,368.79
                    </span>
                    <span className="text-[#E86062] ml-1 text-[10px] ">
                      {" "}
                      -3.98%{" "}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-[14px] py-2 pr-4 pl-3 text-[#68B4EB] bg-blue-700 rounded md:bg-transparent  md:p-0 flex items-center"
                    aria-current="page"
                  >
                    ETH{" "}
                    <span className="text-[black] dark:text-white ml-1 text-[14px]">
                      $1368.79
                    </span>
                    <span className="text-[#E86062] ml-1 text-[10px] ">
                      {" "}
                      -9.96%{" "}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-[14px] py-2 pr-4 pl-3 text-[#26A17B] bg-blue-700 rounded md:bg-transparent  md:p-0 flex items-center"
                    aria-current="page"
                  >
                    USDT{" "}
                    <span className="text-[black] dark:text-white ml-1 text-[14px]">$0.079</span>
                    <span className="text-[#E86062] text-[10px] ml-1">
                      {" "}
                      -0.98%{" "}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-nowrap text-[14px] py-2 pr-4 pl-3 text-[#F7931A] bg-blue-700 rounded md:bg-transparent md:p-0 "
                    aria-current="page"
                  >
                    BTC{" "}
                    <span className="text-[black] dark:text-white ml-1 text-[14px]">
                      $21368.79
                    </span>
                    <span className="text-[#E86062] ml-1 text-[10px] ">
                      {" "}
                      -3.98%{" "}
                    </span>
                  </a>
                </li>
              </ul>
              <div className="col-span-4">
                <div className="">
                  <div className="flex justify-end">
                    <Image
                      src={Nav}
                      alt="Picture of the author"
                      className="object-contain"
                      width="12px"
                      height="12px"
                    />
                    <p className="text-black dark:text-white text-[14px] ml-2 mt-2 font-medium mr-4">
                      USD{" "}
                    </p>
                    <div className="pt-[7px] px-2 pb-[0px] rounded-full bg-[#4594CD]">
                    {isActive?<Image
                      src={dark}
                      alt="Picture of the author"
                      className="object-contain ml-8 hover:cursor-pointer "
                      onClick={handleClick}
                    /> :
                      
                    <Image
                    src={Nav2}
                    alt="Picture of the author"
                    className="object-contain ml-8 hover:cursor-pointer "
                    onClick={handleClick}
                  />
                    }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <NavII/>
      <HomeBody />
      </div>
      <Footer />
    </div>
  )
}

export default NavI