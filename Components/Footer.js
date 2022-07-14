import React from "react";
import Asset from "../public/Assests/Asset 1.png";
import Image from "next/image";
import facebook from ".././public/Assests/Facebook.png";
import linkedin from "../public/Assests/linkedin.png";
import git from "../public/Assests/git.png";
import Twitter from "../public/Assests/Twitter.png";
import insta from "../public/Assests/Instagram.png";
import Nav4 from "../public/Assests/search.3.png";
import Nav from "../public/Assests/nav.png"


const Footer = () => {
  return (
    <div className="dark:bg-[#252424]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 ">
          <div className="lg:col-span-4 md:col-span-6 col-span-12 px-3 py-12 border-r dark:border-[#363535]">
            <Image src={Asset} className='dark:invert-0 invert' width="150px" height="30px" />
            <p className="dark:text-white text-[14px] mt-3">
              Depending on the Company User Experience designer may need a jack
              of all trades
            </p>
            <div className="flex mt-20">
              <p className="dark:text-white text-[13px]">Support</p>
              <p className="dark:text-white text-[13px] ml-4">Terms & Services</p>
              <p className="dark:text-white text-[13px] ml-4">Terms & Conditions</p>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 md:col-span-6 px-3 py-12 border-r dark:border-[#363535]">
            <p className="dark:text-white text-[13px]">First Link</p>
            <p className="dark:text-white text-[13px] mt-3">Second Link</p>
            <p className="dark:text-white text-[13px] mt-3">Third Link</p>
            <p className="dark:text-white text-[13px] mt-3">Fourth Link</p>
            <div className="flex mt-12 justify-evenly">
              <Image src={facebook} className="mr-3" />
              <Image src={linkedin} className="ml-3" />
              <Image src={git} className="ml-3" />
              <Image src={Twitter} className="ml-3" />
              <Image src={insta} className="ml-3" />
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 md:col-span-6 py-12 px-5">
            <p className="dark:text-white text-[13px]">Newslwtter</p>
            <div className="flex justify-between">
                <p className="text-md font-medium dark:text-white">
                Suscribe Coin Official
                </p>
                <p className="dark:text-white text-[13px] mt-1">For Our Future Updates</p>
               


            </div>
            <div className="flex mt-3 justify-self-end">
                  <div className="relative">
                    <div className="flex absolute inset-y-0 right-0 items-center pl-3 pointer-events-none">
                      <Image
                        className="w-5   text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        src={Nav}
                      />
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-[#EEF8FF] h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                      focus:border-blue-500 block xl:w-[350px]  lg:300px pl-10 p-2.5 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="your email"
                    />
                  </div>
                
                </div>
                <p className="dark:text-white text-[13px] mt-16">2022 CoinOfficial all rights reservd</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
