import React from "react";

import Image from "next/image";
import Fila from "../public/Assests/fila.png";
import Nike from "../public/Assests/nike.png";
import Adidas from "../public/Assests/adidas.png";
import sports from "../public/Assests/sports.png";
import Puma from "../public/Assests/Logo.png";
import nj from "../public/Assests/Bg.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider1 from "../public/Assests/slider 1.png";
import Assets01 from "../public/Assests/Asset 1.png";
import CryptoPrices from "./cryptoPrices";
import HomeTable from "./HomeTable";

const HomeBody = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className=" ">
        <div className="container px-3 mt-12 mx-auto">
          <Carousel responsive={responsive}>
            <div className="py-0 mx-4 relative   ">
              <div className="p-0 mx-0 bg-hero-pattern3 h-48 rounded-md"></div>

              <div className="absolute  top-1 left-2">
                <Image
                  src={Assets01}
                  width={150}
                  className="object-contain rounded-md"
                />
              </div>
              <div className="absolute bottom-3 left-2 right-2">
                <p className="text-sm text-white  text-clip overflow-hidden">
                  Onboard Your Project to the Self-Reporting Dashboard (SRD)
                </p>
              </div>
            </div>
            <div className="py-0 mx-4 relative   ">
              <div className="p-0 mx-0 bg-hero-pattern h-48 rounded-md">
                {/* <Image
                  src={Slider1}
                  width={500}
                  layout=""
                  className="mix-blend-overlay linear-gradient(to right, #000 0%, rgba(84, 84, 84, 0.22) 100%) "
                  // style={{
                  //   background:
                  //     "linear-gradient(to right, #000 0%, rgba(84, 84, 84, 0.22) 100%)",
                  // }}
                /> */}
              </div>

              <div className="absolute  top-1 left-2">
                <Image
                  src={Assets01}
                  width={150}
                  className="object-contain rounded-md"
                />
              </div>
              <div className="absolute bottom-3 left-2 right-2">
                <p className="text-sm text-white text-clip overflow-hidden">
                  The Early Bird Catches The Worm-Richest Individual Bitcoin
                  Investors
                </p>
              </div>
            </div>
            <div className="py-0 mx-4 relative   ">
              <div className="p-0 mx-0 bg-hero-pattern2 h-48 rounded-md">
                {/* <Image
                  src={Slider1}
                  width={500}
                  layout=""
                  className="mix-blend-overlay linear-gradient(to right, #000 0%, rgba(84, 84, 84, 0.22) 100%) "
                  // style={{
                  //   background:
                  //     "linear-gradient(to right, #000 0%, rgba(84, 84, 84, 0.22) 100%)",
                  // }}
                /> */}
              </div>

              <div className="absolute  top-1 left-2">
                <Image
                  src={Assets01}
                  width={150}
                  className="object-contain rounded-md"
                />
              </div>
              <div className="absolute bottom-3 left-2 right-2">
                <p className="text-sm text-white text-clip overflow-hidden">
                  The Early Bird Catches The Worm-Richest Individual Bitcoin
                  Investors
                </p>
              </div>
            </div>
            <div className="py-0 mx-4 relative   ">
              <div className="p-0 mx-0 bg-hero-pattern h-48 rounded-md">
                {/* <Image
                  src={Slider1}
                  width={500}
                  layout=""
                  className="mix-blend-overlay linear-gradient(to right, #000 0%, rgba(84, 84, 84, 0.22) 100%) "
                  // style={{
                  //   background:
                  //     "linear-gradient(to right, #000 0%, rgba(84, 84, 84, 0.22) 100%)",
                  // }}
                /> */}
              </div>

              <div className="absolute  top-1 left-2">
                <Image
                  src={Assets01}
                  width={150}
                  className="object-contain rounded-md"
                />
              </div>
              <div className="absolute bottom-3 left-2 right-2">
                <p className="text-sm text-white text-clip overflow-hidden">
                  Onboard Your Project to the Self-Reporting Dashboard (SRD)
                </p>
              </div>
            </div>
            <div className="py-0 mx-4 relative   ">
              <div className="p-0 mx-0 bg-hero-pattern h-48 rounded-md">
                {/* <Image
                  src={Slider1}
                  width={500}
                  layout=""
                  className="mix-blend-overlay linear-gradient(to right, #000 0%, rgba(84, 84, 84, 0.22) 100%) "
                  // style={{
                  //   background:
                  //     "linear-gradient(to right, #000 0%, rgba(84, 84, 84, 0.22) 100%)",
                  // }}
                /> */}
              </div>

              <div className="absolute  top-1 left-2">
                <Image
                  src={Assets01}
                  width={150}
                  className="object-contain rounded-md"
                />
              </div>
              <div className="absolute bottom-3 left-2 right-2">
                <p className="text-sm text-white text-clip overflow-hidden">
                  The Early Bird Catches The Worm-Richest Individual Bitcoin
                  Investors
                </p>
              </div>
            </div>
            <div className="py-0 mx-4 relative   ">
              <div className="p-0 mx-0 bg-hero-pattern2 h-48 rounded-md"></div>

              <div className="absolute  top-1 left-2">
                <Image
                  src={Assets01}
                  width={150}
                  className="object-contain rounded-md"
                />
              </div>
              <div className="absolute bottom-3 left-2 right-2">
                <p className="text-sm text-white text-clip overflow-hidden">
                  Onboard Your Project to the Self-Reporting Dashboard (SRD)
                </p>
              </div>
            </div>
            <div className="py-0 mx-4 relative   ">
              <div className="p-0 mx-0 bg-hero-pattern3 h-48 rounded-md"></div>

              <div className="absolute  top-1 left-2">
                <Image
                  src={Assets01}
                  width={150}
                  className="object-contain rounded-md"
                />
              </div>
              <div className="absolute bottom-3 left-2 right-2">
                <p className="text-sm text-white text-clip overflow-hidden">
                  The Early Bird Catches The Worm-Richest Individual Bitcoin
                  Investors
                </p>
              </div>
            </div>
          </Carousel>
        </div>
        <CryptoPrices />
        <HomeTable />
      </div>
    </div>
  );
};

export default HomeBody;
