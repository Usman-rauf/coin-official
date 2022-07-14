import React, {useState} from "react";
import Horn from "../public/Assests/card horn.png";
import Image from "next/image";
import Equi from "../public/Assests/equi.png";
import Safe from "../public/Assests/safe.png"
import Meta from "../public/Assests/meta.png"
import Trend from '../public/Assests/trend.png'

import { DragSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'

const CryptoPrices = () => {
    const [checked, setChecked] = useState(false)

  return (
    <div className="container px-5 mx-auto">
      <div className="mt-12 flex justify-between">
        <div>
        <p className="text-[25px] dark:text-white font-medium">
          Today's Cryptocyrency Prices by Coin Official
        </p>
        <p className="text-sm dark:text-white">
          The global crypto market cap is $901.79B,{" "}
          <span className="text-[#E86062]">-0.93%</span> decrease over the last
          day.
        </p>
        </div>
        <div className="flex">
        <p className="mr-4 dark:text-white text-[13px]">Higlights</p>
        < DragSwitch checked={checked} onChange={(e) => setChecked(e) } />
        </div>

       
      </div>
    
      <div className="grid grid-cols-12 ">
        <div className="lg:col-span-4 md:col-span-6 col-span-12 mt-6">
          <div className="shadow-lg p-5 dark:bg-[#1C2024] dark:text-white rounded-md mx-4 bg-[#EEECF0]">
            <div className="flex px-7">
              <Image src={Horn} className="object-contain" />
              <p className="ml-2 text-[20px] font-medium">Permoted</p>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="flex">
                <p className="mr-4">1</p>
                <Image src={Equi} className="object-contain" />
                <p className="ml-2">Equilibrium</p>
                <p className="text-[10px] ml-2 mt-1">EQUM</p>
              </div>
              <div>
                <p className="text-[#3FB791]">+2.78%</p>
              </div>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="flex">
                <p className="mr-4">2</p>
                <Image src={Safe} className="object-contain" />
                <p className="ml-2">SafePuloto</p>
                <p className="text-[10px] ml-2 mt-1">SPI</p>
              </div>
              <div>
                <p className="text-[#3FB791]">+1.78%</p>
              </div>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="flex">
                <p className="mr-4">3</p>
                <Image src={Meta} className="object-contain" />
                <p className="ml-2">Meta</p>
                <p className="text-[10px] ml-2 mt-1">META</p>
              </div>
              <div>
                <p className="text-[#3FB791]">+2.78%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12 mt-6">
          <div className="shadow-lg p-5 dark:bg-[#1C2024] dark:text-white mx-4 rounded-md bg-[#EEECF0]">
            <div className="flex px-7">
              <Image src={Horn} className="object-contain" />
              <p className="ml-2 text-[20px] font-medium">Largest increase 24h</p>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="flex">
                <p className="mr-4">1</p>
                <Image src={Equi} className="object-contain" />
                <p className="ml-2">Equilibrium</p>
                <p className="text-[10px] ml-2 mt-1">EQUM</p>
              </div>
              <div>
                <p className="text-[#3FB791]">+2.78%</p>
              </div>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="flex">
                <p className="mr-4">2</p>
                <Image src={Safe} className="object-contain" />
                <p className="ml-2">SafePuloto</p>
                <p className="text-[10px] ml-2 mt-1">SPI</p>
              </div>
              <div>
                <p className="text-[#3FB791]">+1.78%</p>
              </div>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="flex">
                <p className="mr-4">3</p>
                <Image src={Meta} className="object-contain" />
                <p className="ml-2">Meta</p>
                <p className="text-[10px] ml-2 mt-1">META</p>
              </div>
              <div>
                <p className="text-[#3FB791]">+2.78%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12 mt-6">
          <div className="shadow-lg dark:bg-[#1C2024] dark:text-white rounded-md p-5 mx-4 bg-[#EEECF0]">
            <div className="flex px-7">
              <Image src={Trend} className="object-contain" />
              <p className="ml-2 text-[20px] font-medium">Trending</p>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="flex">
                <p className="mr-4">1</p>
                <Image src={Equi} className="object-contain" />
                <p className="ml-2">Equilibrium</p>
                <p className="text-[10px] ml-2 mt-1">EQUM</p>
              </div>
              <div>
                <p className="text-[#3FB791]">+2.78%</p>
              </div>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="flex">
                <p className="mr-4">2</p>
                <Image src={Safe} className="object-contain" />
                <p className="ml-2">SafePuloto</p>
                <p className="text-[10px] ml-2 mt-1">SPI</p>
              </div>
              <div>
                <p className="text-[#3FB791]">+1.78%</p>
              </div>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="flex">
                <p className="mr-4">3</p>
                <Image src={Meta} className="object-contain" />
                <p className="ml-2">Meta</p>
                <p className="text-[10px] ml-2 mt-1">META</p>
              </div>
              <div>
                <p className="text-[#3FB791]">+2.78%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPrices;
