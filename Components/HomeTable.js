import React from 'react'
import Fila from "../public/Assests/fila.png";
import Nike from "../public/Assests/nike.png";
import Adidas from "../public/Assests/adidas.png";
import sports from "../public/Assests/sports.png";
import Puma from "../public/Assests/Logo.png";
import nj from "../public/Assests/Bg.png";
import New from "../public/Assests/new.png";
import Button1 from "../public/Assests/star.png";
import Best from "../public/Assests/best.png";
import Sale from "../public/Assests/sale.png";
import Audit from "../public/Assests/Audit.png";
import Search from '../public/Assests/search.3.png'
import Filter from "../public/Assests/filter.png";
import Hot from "../public/Assests/hott.png";
import Table1 from "../public/Assests/Group 194.png";
import Table2 from "../public/Assests/b.png";
import Table3 from "../public/Assests/Group 9155.png";
import Graph2 from "../public/Assests/Path 1546.png";
import Red from "../public/Assests/red.png";
import Nav from "../public/Assests/nav1.png";
import Image from "next/image";
import Bsc from '../public/Assests/bsc.png'
import Blue from "../public/Assests/blue.png"
import Graphe from "../public/Assests/Graph Blue.png"


const HomeTable = () => {
  return (
    <div>
                <div className="container px-4 mt-20 mx-auto">
          <div className="grid  justify-between grid-cols-12">
            <div className="col-span-6">
              <button className="bg-[#EEECF0] mt-2 text-sm text-black py-2 px-2 rounded">
                <Image
                  src={Button1}
                  className="invert"
                  height="12px"
                  width="12px"
                />{" "}
                Watchlist
              </button>
              <select
                name="cars"
                className="bg-[#EEECF0] text-[#5B5B5B] dark:bg-[#112533] dark:text-white w-40 h-10 mx-3 rounded-md p-1"
                id="cars"
              >
                <option value="volvo">select chain</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <button className=" mt-2 ml-1 rounded-lg nav-button text-[white] text-sm  dark:bg-[#112533] py-2 px-2 ">
                <Image src={Filter} height="12px" width="12px" /> Filters
              </button>
              <br />
              <button className=" nav-button dark:bg-[#112533] mt-2 ml-1 text-sm rounded-lg text-[white] py-2 px-4 ">
                <Image src={Hot} height="12px" width="12px" /> Todat's Hot
              </button>
              <button className="nav-button dark:bg-[#112533] mt-2 ml-1 rounded-lg text-sm text-[white] py-2 px-4">
                <Image src={New} height="12px" width="12px" /> New
              </button>
              <button className="nav-button dark:bg-[#112533] mt-2 ml-1 rounded-lg text-sm text-[white] py-2 px-4 ">
                <Image src={Best} height="12px" width="12px" /> Alltime Best
              </button>
              <button className="nav-button dark:bg-[#112533] mt-2 ml-1 text-sm rounded-lg  text-[white] py-2 px-4 ">
                <Image src={Sale} height="12px" width="12px" /> Presale
              </button>

              <button className="nav-button  mt-2 ml-1 text-sm rounded-lg  text-[white] py-2 px-4 ">
                <Image src={Audit} height="12px" width="12px" /> Audited
              </button>
            </div>
            <div className="col-start-8 col-span-5">
              <div className="flex">
              <p className="mt-1 text-[12px] dark:text-white">Show Results</p>
              <input type="text" className="bg-[#E5E7E9] dark:bg-[#112533] p-1 dark:text-white w-12 h-8 rounded-md ml-2 " id="fname" name="fname" />
              <div className="relative ml-1">
                    <div className="flex absolute inset-y-0 left-3 items-center pl-3 pointer-events-none">
                      <Image
                        className="w-5   text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        src={Search}
                      />
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-[#E5E7E9] dark:bg-[#112533] rounded-lg ml-4 h-9 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 
                      focus:border-blue-500 block xl:w-[350px]  lg:300px pl-10 p-2.5 
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="e.g Coin, name"
                    />
                  </div>
              </div>

            </div>
          </div>
        </div>
        <div className="container pt-16 px-4 mx-auto">
          <div className="grid grid-cols-12 py-6">
            <div className="col-span-12">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left snap-x rounded-lg  text-gray-500 dark:text-white">
                  <thead className=" border-b text-gray-700   bg-[#F0F0F0] dark:border-[#816868] dark:bg-[#112533] dark:text-white">
                    <tr>
                      <th scope="col" className="px-6 text-[13px] py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 text-[13px] py-3">
                        Chain
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        24h %
                      </th>
                     
                      <th scope="col" className="px-6 py-3">
                        Market Cap
                      </th>{" "}
                      <th scope="col" className="px-6 py-3">
                        Value 24h
                      </th>{" "}
                      <th scope="col" className="px-6 py-3">
                        Circulating supply
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Last 7 Days
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Votes
                      </th>
                      {/* <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#F0F0F0] border-b dark:bg-[#112533] dark:border-[#816868]">
                      <th
                        scope="row"
                        className="px-6 py-7 my-auto flex font-normal text-black dark:text-white whitespace-nowrap"
                      >
                        <p className=" mr-3">1</p>{" "}
                        <Image src={Table1} className="object-contain" />
                        <p className="ml-1 text-[13px]">Bitcoin</p>
                        <span className="ml-1 mt-[3px] text-xs">BTC</span>
                      </th>
                      <td className='px-6 py-4'><div className='flex ml-3'><Image className='object-contian' src={Bsc}/><p className='ml-1'>Bsc</p></div> </td>

                      <td className="px-6 py-4 text-[13px]">$20,929.25</td>
                      <td className="px-6 py-4 text-[13px] text-[#E86062]">
                        -1.38%
                      </td>
                     
                      <td className="px-6 py-4 text-[13px]">$325,555,7544</td>

                      <td className="px-6 py-4 text-[13px]">
                        $325,555,7544
                        <p className="text-xs">17337UDC</p>
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        325,555,7544 UDC
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        <Image src={Red} />
                      </td>
                      <td className="">
                        <button className="nav-button text-sm text-white px-3 py-2 rounded">
                          <Image
                            src={Graph2}
                            className="m-2"
                            height="12px"
                            width="12px"
                          />
                          32654
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-[#F0F0F0] border-b dark:bg-[#112533] dark:border-[#816868]">
                      <th
                        scope="row"
                        className="px-6  py-7 flex font-normal text-black dark:text-white whitespace-nowrap"
                      >
                        <p className="mr-3">2</p>{" "}
                        <Image src={Table3} className="object-contain" />
                        <p className="ml-1 text-[13px]">Etitirium</p>
                        <span className="ml-1 mt-[3px] text-xs">ETH</span>
                      </th>
                      <td className='px-6 py-4'><div className='flex ml-3'><Image className='object-contian' src={Bsc}/><p className='ml-1'>Bsc</p></div> </td>

                      <td className="px-6 py-4 text-[13px]">$1092.88</td>
                      <td className="px-6 py-4 text-[13px] text-[#E86062]">
                        -1.63%
                      </td>
                     
                      <td className="px-6 py-4 text-[13px]">$325,555,7544</td>
                      <td className="px-6 py-4 text-[13px]">
                        $325,555,7544
                        <p className="text-xs">17337UDC</p>
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        325,555,7544 UDC
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        <Image src={Graphe} />
                      </td>
                      <td className="">
                        <button className="nav-button text-sm text-white px-3 py-2 rounded">
                          <Image
                            src={Graph2}
                            className="m-2"
                            height="12px"
                            width="12px"
                          />
                          32654
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-[#F0F0F0] border-b dark:bg-[#112533] dark:border-[#816868]">
                      <th
                        scope="row"
                        className="px-6 flex py-7 font-normal text-black dark:text-white whitespace-nowrap"
                      >
                        <p className=" mr-3">3</p>{" "}
                        <Image src={Table2} className="object-contain" />
                        <p className="ml-1 text-[13px]">Tether</p>
                        <span className="ml-1 mt-[2px] text-xs">USDT</span>
                      </th>
                      <td className='px-6 py-4'><div className='flex ml-3'><Image className='object-contian' src={Bsc}/><p className='ml-1'>Bsc</p></div> </td>

                      <td className="px-6 py-4 text-[13px]">$0.9989</td>
                      <td className="px-6 py-4 text-[13px] text-[#3FB791]">
                        0.00%
                      </td>
                     
                      <td className="px-6 py-4 text-[13px]">$325,555,7544</td>
                      <td className="px-6 py-4 text-[13px]">
                        $325,555,7544
                        <p className="text-xs">17337UDC</p>
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        325,555,7544 UDC
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        <Image src={Blue} />
                      </td>
                      <td className="">
                        <button className="dark:bg-[#1e384b] border border-[#CE6CF7] bg-[white] text-sm dark:text-white text-[#4594CD] px-3 py-2 rounded">
                          <Image
                            src={Graph2}
                            className="m-2"
                            height="12px"
                            width="12px"
                          />
                          32654
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-[#F0F0F0] border-b dark:bg-[#112533] dark:border-[#816868]">
                      <th
                        scope="row"
                        className="px-6 py-7 flex font-normal text-black dark:text-white whitespace-nowrap"
                      >
                        <p className="mr-3">4</p>{" "}
                        <Image
                          src={Nav}
                          className="object-contain"
                          width="20px"
                          height="15px"
                        />
                        <p className="ml-1 text-[13px]">USD Coin</p>
                        <span className="ml-1 mt-[3px] text-xs">USDC</span>
                      </th>
                      <td className='px-6 py-4'><div className='flex ml-3'><Image className='object-contian' src={Bsc}/><p className='ml-1'>Bsc</p></div> </td>

                      <td className="px-6 py-4 text-[13px]">$1.00</td>
                      <td className="px-6 py-4 text-[13px] text-[#3FB791]">
                        0.06%
                      </td>
                     
                      <td className="px-6 py-4 text-[13px]">$325,555,7544</td>
                      <td className="px-6 py-4 text-[13px]">
                        $325,555,7544
                        <p className="text-xs">17337UDC</p>
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        325,555,7544 UDC
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        <Image src={Blue} />
                      </td>
                      <td className="">
                        <button className="dark:bg-[#1d3647] border border-[#CE6CF7] bg-[white] text-sm dark:text-white text-[#4594CD] px-3 py-2 rounded">
                          <Image
                            src={Graph2}
                            className="m-2"
                            height="12px"
                            width="12px"
                          />
                          32654
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-[#F0F0F0] border-b dark:bg-[#112533] dark:border-[#816868]">
                      <th
                        scope="row"
                        className="px-6 py-7 flex font-normal text-black dark:text-white whitespace-nowrap"
                      >
                        
                        <p className=" mr-3">5</p>{" "}
                        <Image src={Table1} className="object-contain" />
                        <p className="ml-1 text-[13px] ">BNB</p>
                        <span className="ml-1 mt-[3px] text-xs">BNB</span>
                      </th>
                      <td className='px-6 py-4'><div className='flex ml-3'><Image className='object-contian' src={Bsc}/><p className='ml-1'>Bsc</p></div> </td>

                      <td className="px-6 py-4  text-[13px]">$211.11</td>
                      <td className="px-6 py-4 text-[13px] text-[#E86062]">
                        -1.66%
                      </td>
                    
                      <td className="px-6 py-4 text-[13px]">$325,555,7544</td>
                      <td className="px-6 py-4 text-[13px]">
                        $325,555,7544
                        <p className="text-xs">17337UDC</p>
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        325,555,7544 UDC
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        <Image src={Blue} />
                      </td>
                      <td className="">
                        <button className="nav-button text-sm text-white px-3 py-2 rounded">
                          <Image
                            src={Graph2}
                            className="m-2"
                            height="12px"
                            width="12px"
                          />
                          32654
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-[#F0F0F0] border-b dark:bg-[#112533] dark:border-[#816868]">
                      <th
                        scope="row"
                        className="px-6 py-7 flex font-normal text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        
                        <p className=" mr-3">6</p>{" "}
                        <Image src={Table1} className="object-contain" />
                        <p className="ml-1 text-[13px]">Bitcoin</p>
                        <span className="ml-1 mt-[3px] text-xs">BTC</span>
                      </th>
                      <td className='px-6 py-4'><div className='flex ml-3'><Image className='object-contian' src={Bsc}/><p className='ml-1'>Bsc</p></div> </td>

                      <td className="px-6 py-4 text-[13px]">$20,929.25</td>
                      <td className="px-6 py-4 text-[13px] text-[#E86062]">
                        -1.38%
                      </td>
                     
                      <td className="px-6 py-4 text-[13px]">$325,555,7544</td>
                      <td className="px-6 py-4 text-[13px]">
                        $325,555,7544
                        <p className="text-xs">17337UDC</p>
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        325,555,7544 UDC
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        <Image src={Graphe} />
                      </td>
                      <td className="">
                        <button className="nav-button text-sm text-white px-3 py-2 rounded">
                          <Image
                            src={Graph2}
                            className="m-2"
                            height="12px"
                            width="12px"
                          />
                          32654
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-[#F0F0F0] border-b dark:bg-[#112533] dark:border-[#816868]">
                      <th
                        scope="row"
                        className="px-6 py-7 flex font-normal text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        <p className=" mr-3">7</p>{" "}
                        <Image src={Table3} className="object-contain" />
                        <p className="ml-1 text-[13px]">Etitirium</p>
                        <span className="ml-1 mt-[3px] text-xs">ETH</span>
                      </th>
                      <td className='px-6 py-4'><div className='flex ml-3'><Image className='object-contian' src={Bsc}/><p className='ml-1'>Bsc</p></div> </td>

                      <td className="px-6 py-4 text-[13px]">$1092.88</td>
                      <td className="px-6 py-4 text-[13px] text-[#E86062]">
                        -1.63%
                      </td>
                     
                      <td className="px-6 py-4 text-[13px]">$325,555,7544</td>
                      <td className="px-6 py-4 text-[13px]">
                        $325,555,7544
                        <p className="text-xs">17337UDC</p>
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        325,555,7544 UDC
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        <Image src={Red} />
                      </td>
                      <td className="">
                        <button className="nav-button text-sm text-white px-3 py-2 rounded">
                          <Image
                            src={Blue}
                            className="m-2"
                            height="12px"
                            width="12px"
                          />
                          32654
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-[#F0F0F0] border-b dark:bg-[#112533] dark:border-[#816868]">
                      <th
                        scope="row"
                        className="px-6 py-7 font-normal flex text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        
                        <p className="mr-3">8</p>{" "}
                        <Image src={Table2} className="object-contain" />
                        <p className="ml-1 text-[13px]">Tether</p>
                        <span className="ml-1 mt-[3px] text-xs">USDT</span>
                      </th>
                      <td className='px-6 py-4'><div className='flex ml-3'><Image className='object-contian' src={Bsc}/><p className='ml-1'>Bsc</p></div> </td>

                      <td className="px-6 py-4 text-[13px]">$0.9989</td>
                      <td className="px-6 py-4 text-[13px] text-[#3FB791]">
                        0.00%
                      </td>
                      
                      <td className="px-6 py-4 text-[13px]">$325,555,7544</td>
                      <td className="px-6 py-4 text-[13px]">
                        $325,555,7544
                        <p className="text-xs">17337UDC</p>
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        325,555,7544 UDC
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        <Image src={Red} />
                      </td>
                      <td className="">
                        <button className="dark:bg-[#1c3446] border border-[#CE6CF7] text-sm dark:text-white text-[#4594CD] bg-[white] px-3 py-2 rounded">
                          <Image
                            src={Graph2}
                            className="m-2"
                            height="12px"
                            width="12px"
                          />
                          32654
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-[#F0F0F0] border-b dark:bg-[#112533] dark:border-[#816868]">
                      <th
                        scope="row"
                        className="px-6 py-7 font-normal flex text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        
                        <p className=" mr-3">9</p>{" "}
                        <Image
                          src={Nav}
                          height="15px"
                          width="20px"
                          className="object-contain"
                        />
                        <p className="ml-1 text-[13px]">USD Coin</p>
                        <span className="ml-1 mt-[3px] text-xs">USDC</span>
                      </th>
                      <td className='px-6 py-4'><div className='flex ml-3'><Image className='object-contian' src={Bsc}/><p className='ml-1'>Bsc</p></div> </td>

                      <td className="px-6 py-4 text-[13px]">$1.00</td>
                      <td className="px-6 py-4 text-[13px] text-[#3FB791]">
                        0.06%
                      </td>
                     
                      <td className="px-6 py-4 text-[13px]">$325,555,7544</td>
                      <td className="px-6 py-4 text-[13px]">
                        $325,555,7544
                        <p className="text-xs">17337UDC</p>
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        325,555,7544 UDC
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        <Image src={Red} />
                      </td>
                      <td className="">
                        <button className="nav-button text-sm text-white px-3 py-2 rounded">
                          <Image
                            src={Graph2}
                            className="m-2"
                            height="12px"
                            width="12px"
                          />
                          32654
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-[#F0F0F0] dark:bg-[#112533]">
                      <th
                        scope="row"
                        className="px-6 py-7 font-normal flex text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        <p className=" mr-2">10</p>{" "}
                        <Image src={Table1} className="object-contain" />
                        <p className="ml-1 text-[13px]">BNB</p>
                        <span className="ml-1 mt-[3px] my-auto text-xs">
                          BNB
                        </span>
                      </th>
                      <td className='px-8 py-4'><div className='flex '><Image className='object-contian' src={Bsc}/><p className='ml-1'>Bsc</p></div> </td>

                      <td className="px-6 py-4 text-[13px]">$211.11</td>
                      <td className="px-6 py-4 text-[13px] text-[#E86062]">
                        -1.66%
                      </td>
                     
                      <td className="px-6 py-4 text-[13px]">$325,555,7544</td>
                      <td className="px-6 py-4 text-[13px]">
                        $325,555,7544
                        <p className="text-xs">17337UDC</p>
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        325,555,7544 UDC
                      </td>
                      <td className="px-6 py-4 text-[13px]">
                        <Image src={Blue} />
                      </td>
                      <td className="">
                        <button className="nav-button text-sm text-white  px-3 py-2 rounded">
                          <Image
                            src={Graph2}
                            className="m-2"
                            height="12px"
                            width="12px"
                          />
                          32654
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 py-24">
           <div className='lg:col-span-6 md:col-span-12 col-span-12'>
            <div className='bg-[#F0F0F0] dark:bg-[#040707] dark:text-white dark:border-#5B5B5B dark:opacity-50 py-8 border border-#BFBFBF'>
                <p className='text-center text-[25px] pt-6'>Partners</p>
                <div className='flex justify-center gap-12 mt-6'>
                <Image src={Fila} className="invert dark:invert-0 opacity-80 object-contain"/>
                <Image src={sports} className="invert dark:invert-0 opacity-80 object-contain"/>
                <Image src={Puma} className="invert opacity-80 dark:invert-0 object-contain"/>


                </div>
            </div>

           </div>
           <div className='lg:col-span-6 md:col-span-12 col-span-12'>
            <div className='bg-[#F0F0F0] dark:bg-[#040707] dark:text-white dark:opacity-50 dark:border-#5B5B5B py-8 border border-#BFBFBF'>
                <p className='text-center text-[25px] pt-6'>Sponsonrs</p>
                <div className='flex justify-center gap-12 mt-6'>
                <Image src={Nike} className="invert dark:opacity-100 dark:invert-0 opacity-80 object-contain"/>
                <Image src={sports} className="invert dark:invert-0 dark:opacity-100 opacity-80 object-contain"/>
                <Image src={Adidas} className="invert dark:invert-0 opacity-80 object-contain"/>


                </div>
            </div>

           </div>
          </div>
        </div>
    </div>
  )
}

export default HomeTable