"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [sideBar, setsideBar] = useState();
  return (
    <div className="overflow-x-hidden">
      <div className="">
        <div className="relative block group pb-44">
          <Image
            className="absolute inset-0 object-cover w-full  
              h-full"
            src="/main-2.png"
            alt="img"
            width={1247}
            height={936}
          />
          <div className="relative">
            <nav>
              <div className="block lg:hidden xl:hidden 2xl:hidden ">
                <div className="relative px-4 py-5 flex justify-between w-full sm:block md:block ">
                  {sideBar ? (
                    <button
                      onClick={() => setsideBar(!sideBar)}
                      aria-label="close nav bar"
                      role="button"
                      tabIndex={0}
                      onKeyPress="{sidebarHandler(false)}"
                      className="right-0 mr-4 mt-0.5 outline-none  absolute"
                      id="cross"
                      onclick="sidebarHandler(false)"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18"
                          stroke="#ffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 6L18 18"
                          stroke="#ffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => setsideBar(!sideBar)}
                      aria-label="open nav bar"
                      role="button"
                      className="right-0 mr-4 mt-0.5 outline-none absolute "
                      id="menu"
                      onClick-2="sidebarHandler(true)"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 10H3"
                          stroke="#ffff"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 6H3"
                          stroke="#ffff"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 14H3"
                          stroke="#ffff"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 18H3"
                          stroke="#ffff"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  <div className="w-auto cursor-pointer"></div>
                </div>
                <div
                  className={
                    sideBar
                      ? " bg-gradient-to-r from-sky-900 mt-8  h-screen z-20 px-4 transition duration-150 ease-in-out absolute w-full top-30 transform translate-x-0"
                      : " bg-transparent  mt-8 h-full z-20  px-4 transition duration-150 ease-in-out absolute w-full top-30 transform -translate-x-full"
                  }
                >
                  <div>
                    <div className=" w-full pl-6">
                      <h1 className="font-bold text-white text-[35px] text-center">
                        trxvl.
                      </h1>
                      <div>
                        <h1 className="text-[17px] text-white  pb-4 px-3 focus:border-b mt-12">
                          Home
                        </h1>
                      </div>
                      <div className="">
                        <h1 className="text-[17px] text-white  pb-4 px-3 focus:border-b">
                          Pricing
                        </h1>{" "}
                      </div>
                      <div className="">
                        <h1 className="text-[17px] text-white  pb-4 px-3 focus:border-b">
                          Resources
                        </h1>
                      </div>
                      <div className="">
                        <h1 className="text-[17px] text-white  pb-4 px-3 focus:border-b">
                          Contact Us
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-6" />
              </div>
            </nav>
            <div className="hidden lg:block">
              <div className="flex justify-between p-5 ">
                <div className="">
                  <h1 className="font-bold text-white text-[35px]">trxvl.</h1>
                </div>
                <div className="flex gap-5 mt-4">
                  <div className="">
                    <Link href="page2">
                      <button className="text-[17px] text-white  pb-4 px-3 border-b ">
                        Home
                      </button>
                    </Link>
                  </div>
                  <div className="">
                    <button className="text-[17px] text-white hover:border-b pb-4 px-3 focus:border-b ">
                      Stays
                    </button>
                  </div>
                  <div className="">
                    <button className="text-[17px] text-white hover:border-b pb-4 px-3 focus:border-b ">
                      Flights
                    </button>
                  </div>
                  <div className="">
                    <button className="text-[17px] text-white hover:border-b pb-4 px-3 focus:border-b ">
                      Packages
                    </button>
                  </div>
                  <div className="">
                    <button className="text-[17px] text-white hover:border-b pb-4 px-3 focus:border-b ">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[1246px] w-full mx-auto pt-12 lg:pt-0 px-5">
              <h1 className="text-white font-bold lg:text-[79.71px] md:text-[50px] text-[24px] w-[840.24px]">
                The whole world awaits.
              </h1>

              <style jsx>{`
                .bg {
                  background-color: rgba(255, 255, 255, 0.4);
                }
              `}</style>
              <div className="block lg:hidden ">
                <div className="bg px-2 py-2 rounded-3xl mt-5">
                  <label className="relative block w-full cursor-text ">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center  pl-8 w-full">
                      <Image
                        className=""
                        src="/icon-1.svg"
                        alt="background image"
                        height={22}
                        width={22}
                      />
                    </span>
                    <input
                      className=" placeholder:text-white py-2 pl-16 pr-3  text-[12px] bg-transparent outline-none text-white "
                      placeholder="Search destinations, hotels"
                      type="text"
                      name="search"
                    />
                  </label>
                </div>
                <div className="bg px-2 py-3.5 rounded-3xl mt-5">
                  <div className="flex gap-6 justify-center items-center  w-full">
                    <div className="flex gap-3 items-center cursor-pointer">
                      <Image
                        src="/icon-2.svg"
                        width={22}
                        height={22}
                        alt="icon"
                      />
                      <h1 className="text-white font-normal text-[12px]">
                        Check in
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center cursor-pointer">
                      <Image
                        src="/icon-3.svg"
                        width={22}
                        height={22}
                        alt="icon"
                      />
                      <h1 className="text-white font-normal text-[12px]">
                        Check out
                      </h1>
                    </div>{" "}
                  </div>
                </div>
                <div className="bg px-2 py-3.5 rounded-3xl mt-5">
                  <div className="flex gap-3 items-center  justify-center cursor-pointer ">
                    <Image
                      src="/icon-4.svg"
                      width={22}
                      height={22}
                      alt="icon"
                    />
                    <h1 className="text-white font-normal text-[12px]">
                      1 room, 2 adults
                    </h1>
                  </div>{" "}
                </div>
                <div className="">
                  <button className="rounded-full bg-indigo-700 hover:bg-indigo-900 duration-150  text-white  text-[12px] w-full py-3.5  mt-5">
                    Search
                  </button>
                </div>
              </div>
              <div className="bg px-3 py-3 rounded-3xl mt-5 hidden lg:block ">
                <div className="lg:flex justify-between">
                  <div className="lg:w-[428px] w-full ">
                    <label className="relative block w-full cursor-text">
                      <span className="sr-only">Search</span>
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2 w-full">
                        <Image
                          className=""
                          src="/icon-1.svg"
                          alt="background image"
                          height={22}
                          width={22}
                        />
                      </span>
                      <input
                        className=" placeholder:text-white py-2 pl-9 pr-3  text-[17px] bg-transparent outline-none text-white "
                        placeholder="Search destinations, hotels"
                        type="text"
                        name="search"
                      />
                    </label>
                  </div>
                  <div className="md:flex lg:gap-10 xl:gap-14  2xl:gap-14 gap-5  lg:w-[710px] w-full">
                    <div className="flex gap-3 items-center cursor-pointer mt-3 lg:mt-0">
                      <Image
                        src="/icon-2.svg"
                        width={22}
                        height={22}
                        alt="icon"
                      />
                      <h1 className="text-white font-normal text-[17px]">
                        Check in
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center cursor-pointer  mt-3 lg:mt-0 ">
                      <Image
                        src="/icon-3.svg"
                        width={22}
                        height={22}
                        alt="icon"
                      />
                      <h1 className="text-white font-normal text-[17px]">
                        Check out
                      </h1>
                    </div>{" "}
                    <div className="flex gap-3 items-center cursor-pointer  mt-3 lg:mt-0">
                      <Image
                        src="/icon-4.svg"
                        width={22}
                        height={22}
                        alt="icon"
                      />
                      <h1 className="text-white font-normal text-[17px]">
                        1 room, 2 adults
                      </h1>
                    </div>{" "}
                    <div className="">
                      <button className="rounded-full bg-white text-[#2659C3] text-[17px] px-9 py-2.5  mt-3 lg:mt-0">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-white font-bold lg:text-[35px] md:text-[30px] text-[24px] mt-12 hidden lg:block">
                Top categories
              </h1>
              <div className=" hidden lg:block">
                <div className="flex justify-between gap-5 items-center mt-10">
                  <Link href="/index">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/icon-5.svg"
                        width={35}
                        height={35}
                        alt="icon"
                      />
                      <h1 className="text-white text-[17px] font-normal text-center pt-3">
                        Beaches
                      </h1>
                    </div>
                  </Link>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/icon-6.svg"
                      width={35}
                      height={35}
                      alt="icon"
                    />
                    <h1 className="text-white text-[17px] font-normal text-center pt-3">
                      Deserts
                    </h1>
                  </div>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/icon-7.svg"
                      width={35}
                      height={35}
                      alt="icon"
                    />
                    <h1 className="text-white text-[17px] font-normal text-center pt-3">
                      Mountains
                    </h1>
                  </div>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/icon-8.svg"
                      width={35}
                      height={35}
                      alt="icon"
                    />
                    <h1 className="text-white text-[17px] font-normal text-center pt-3">
                      Iconic Cities
                    </h1>
                  </div>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/icon-9.svg"
                      width={35}
                      height={35}
                      alt="icon"
                    />
                    <h1 className="text-white text-[17px] font-normal text-center pt-3">
                      Houseboats
                    </h1>
                  </div>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/icon-10.svg"
                      width={35}
                      height={35}
                      alt="icon"
                    />
                    <h1 className="text-white text-[17px] font-normal text-center pt-3">
                      Countryside
                    </h1>
                  </div>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/icon-11.svg"
                      width={35}
                      height={35}
                      alt="icon"
                    />
                    <h1 className="text-white text-[17px] font-normal text-center pt-3">
                      Camping
                    </h1>
                  </div>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/icon-12.svg"
                      width={35}
                      height={35}
                      alt="icon"
                    />
                    <h1 className="text-white text-[17px] font-normal text-center pt-3">
                      Castles
                    </h1>
                  </div>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/icon-13.svg"
                      width={35}
                      height={35}
                      alt="icon"
                    />
                    <h1 className="text-white text-[17px] font-normal text-center pt-3">
                      Skiing
                    </h1>
                  </div>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/icon-14.svg"
                      width={35}
                      height={35}
                      alt="icon"
                    />
                    <h1 className="text-white text-[17px] font-normal text-center pt-3">
                      Tropical
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[1512px] w-full mx-auto mt-12 lg:pl-[0px] xl:pl-[55px] 2xl:pl-[135px] pl-0 ">
              <h1 className="text-white font-bold lg:text-[35px] md:text-[30px] text-[24px]  px-5">
                Top Vacation Destinations
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-36 lg:max-w-[1512px] w-full mx-auto  lg:pl-[0px] xl:pl-[55px] 2xl:pl-[135px] pl-0 ">
        <div className="px-5">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-1.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Swiss Apls
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-2.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Hallstatt
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-3.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Faroe Island
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-1.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Swiss Apls
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-2.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Hallstatt
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-3.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Faroe Island
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mt-12 w-full mx-auto lg:hidden block  pl-0 ">
        <div className="px-5">
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="px-5">
              <SwiperSlide className=" ">
                <Link href="/index">
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/t-1.svg"
                      width={35}
                      height={35}
                      alt="icon"
                    />
                    <h1 className="text-black md:text-[17px] sm:text-[12px] text-[8px] font-normal text-center pt-3">
                      Beaches
                    </h1>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className=" ">
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/t-2.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-black md:text-[17px] sm:text-[12px] text-[8px] font-normal text-center pt-3">
                    Deserts
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Link href="/mountains">
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/t-3.svg"
                      width={35}
                      height={35}
                      alt="icon"
                    />
                    <h1 className="text-black md:text-[17px] sm:text-[12px] text-[8px] font-normal text-center pt-3">
                      Mountains
                    </h1>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className=" ">
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/t-4.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-black md:text-[17px] sm:text-[12px] text-[8px] font-normal text-center pt-3">
                    Iconic Cities
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" ">
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/t-5.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-black md:text-[17px] sm:text-[12px] text-[8px] font-normal text-center pt-3">
                    Houseboats
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" ">
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/t-1.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-black md:text-[17px] sm:text-[12px] text-[8px] font-normal text-center pt-3">
                    Camping
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" ">
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/t-2.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-black md:text-[17px] sm:text-[12px] text-[8px] font-normal text-center pt-3">
                    Camping
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" ">
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/t-3.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-black md:text-[17px] sm:text-[12px] text-[8px] font-normal text-center pt-3">
                    Mountains
                  </h1>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div className="lg:max-w-[1512px] w-full mx-auto  lg:pl-[0px] xl:pl-[55px] 2xl:pl-[135px] pl-0  my-12 ">
        <h1 className="text-black font-bold lg:text-[35px] md:text-[30px] text-[24px] mb-8 pl-3 px-5">
          Recently Viewed
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 px-5">
          <div className="">
            <div className="shadow-md rounded-3xl my-5 bg-white ">
              <div className=" p-4 border border-gray-50 rounded-3xl">
                <Image
                  className="mx-auto rounded-3xl"
                  src="/c-2.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
                <div className="flex justify-between items-center  mt-3">
                  <div className="">
                    <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                      Hallstatt
                    </h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image
                      className=""
                      src="/Vector .svg"
                      width={21.98}
                      height={20}
                      alt="vector"
                    />
                    <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                      4.7
                    </h1>
                  </div>
                </div>
                <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                  3 Days 4 Nights
                </h1>
                <div className="grid grid-cols-4 mt-6 ">
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/Vector (67).svg"
                      width={24.98}
                      height={24}
                      alt="vector"
                    />
                    <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                      2 Flights
                    </h1>
                  </div>
                  <div className="mt-[5px]">
                    <Image
                      className="mx-auto"
                      src="/Vector (68).svg"
                      width={24.98}
                      height={24}
                      alt="vector"
                    />
                    <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                      1 Hotel
                    </h1>
                  </div>
                  <div className="mt-[7.5px]">
                    <Image
                      className="mx-auto"
                      src="/Vector (69).svg"
                      width={24.98}
                      height={24}
                      alt="vector"
                    />
                    <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                      2 Transfers
                    </h1>
                  </div>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/Vector (70).svg"
                      width={24.98}
                      height={24}
                      alt="vector"
                    />
                    <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                      2 Flights
                    </h1>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-2 ">
                    <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                    <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                      Tour combo with return airport transfer
                    </h1>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                    <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                      City Tour
                    </h1>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                    <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                      Curious Corner
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <h1 className="line-through text-[17px] font-light">
                    ₹88,952
                  </h1>
                  <h1 className="text-black font-bold text-[26px]">
                    ₹88,952
                    <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                      {" "}
                      per person
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="shadow-md rounded-3xl my-5 bg-white ">
              <div className=" p-4 border border-gray-50 rounded-3xl">
                <Image
                  className="mx-auto rounded-3xl"
                  src="/c-4.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
                <div className="flex justify-between items-center  mt-3">
                  <div className="">
                    <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                      Innsbruck
                    </h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image
                      className=""
                      src="/Vector .svg"
                      width={21.98}
                      height={20}
                      alt="vector"
                    />
                    <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                      4.7
                    </h1>
                  </div>
                </div>
                <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                  3 Days 4 Nights
                </h1>
                <div className="grid grid-cols-4 mt-6 ">
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/Vector (67).svg"
                      width={24.98}
                      height={24}
                      alt="vector"
                    />
                    <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                      2 Flights
                    </h1>
                  </div>
                  <div className="mt-[5px]">
                    <Image
                      className="mx-auto"
                      src="/Vector (68).svg"
                      width={24.98}
                      height={24}
                      alt="vector"
                    />
                    <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                      1 Hotel
                    </h1>
                  </div>
                  <div className="mt-[7.5px]">
                    <Image
                      className="mx-auto"
                      src="/Vector (69).svg"
                      width={24.98}
                      height={24}
                      alt="vector"
                    />
                    <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                      2 Transfers
                    </h1>
                  </div>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/Vector (70).svg"
                      width={24.98}
                      height={24}
                      alt="vector"
                    />
                    <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                      2 Flights
                    </h1>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-2 ">
                    <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                    <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                      Tour combo with return airport transfer
                    </h1>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                    <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                      City Tour
                    </h1>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                    <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                      Curious Corner
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <h1 className="line-through text-[17px] font-light">
                    ₹88,952
                  </h1>
                  <h1 className="text-black font-bold text-[26px]">
                    ₹88,952
                    <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                      {" "}
                      per person
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 ">
            <Image
              className=""
              src="/Frame 43.svg"
              width={399}
              height={607}
              alt="Frame"
            />
          </div>
        </div>
      </div>

      <div className="my-12 lg:max-w-[1512px] w-full mx-auto  lg:pl-[0px] xl:pl-[55px] 2xl:pl-[135px] pl-0 ">
        <div className="px-5">
          <h1 className="text-black font-bold lg:text-[35px] md:text-[30px] text-[24px] mb-8 pl-3 ">
            All Inclusive Packages!
          </h1>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-5.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Val di Funes
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-6.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Ushuaia
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.9
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-7.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Berchtesgaden
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-5.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Val di Funes
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-6.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Ushuaia
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.9
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-7.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Berchtesgaden
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="my-12 lg:max-w-[1512px] w-full mx-auto  lg:pl-[0px] xl:pl-[55px] 2xl:pl-[135px] pl-0 ">
        <div className="px-5">
          <h1 className="text-black font-bold lg:text-[35px] md:text-[30px] text-[24px] mb-8 pl-3 ">
            Honeymoon Freebies Special
          </h1>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-8.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Mauritius
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-9.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Havelock
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.9
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-10.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Whitsunday Islands
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-8.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Swiss Apls
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-9.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Hallstatt
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 bg-white ">
                <div className=" p-4 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto rounded-3xl"
                    src="/c-10.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <div className="flex justify-between items-center  mt-3">
                    <div className="">
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        Whitsunday Islands
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        className=""
                        src="/Vector .svg"
                        width={21.98}
                        height={20}
                        alt="vector"
                      />
                      <h1 className="lg:text-[26.57px] md:text-[20px] text-[16px] text-black font-normal">
                        4.7
                      </h1>
                    </div>
                  </div>
                  <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] text-black font-light mt-2">
                    3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-4 mt-6 ">
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (67).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                    <div className="mt-[5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (68).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        1 Hotel
                      </h1>
                    </div>
                    <div className="mt-[7.5px]">
                      <Image
                        className="mx-auto"
                        src="/Vector (69).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Transfers
                      </h1>
                    </div>
                    <div className="">
                      <Image
                        className="mx-auto"
                        src="/Vector (70).svg"
                        width={24.98}
                        height={24}
                        alt="vector"
                      />
                      <h1 className="lg:text-[13px] md:text-[12px] text-[10px] font-light text-black mt-2 text-center">
                        2 Flights
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 ">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Tour combo with return airport transfer
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        City Tour
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="  bg-gray-400 p-[2.5px] rounded-full"></div>
                      <h1 className="lg:text-[17.71px] md:text-[15px] text-[12px] font-light text-black">
                        Curious Corner
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <h1 className="line-through text-[17px] font-light">
                      ₹88,952
                    </h1>
                    <h1 className="text-black font-bold text-[26px]">
                      ₹88,952
                      <span className="lg:text-[13px] md:text-[12px] text-[10px] font-light ml-1">
                        {" "}
                        per person
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="bg-[#141414] md:p-20 p-10 ">
        <div className="lg:max-w-[1247px] w-full mx-auto px-5">
          <div className="lg:flex gap-32">
            <div className="lg:w-[93px] w-full">
              <h1 className="font-bold text-white text-[35px]">Trxvl.</h1>
            </div>
            <div className="lg:w-[1015.15px] w-full mt-5">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between lg:gap-26 xl:gap-44 2xl:gap-44 gap-7">
                <div className="lg:w-[160px] w-full lg:mt-0 mt-4 ">
                  <h1 className="text-sm text-[#808080] ">
                    Seslendirme ve Alt Jazz
                  </h1>
                  <h1 className="text-sm text-[#808080] mt-4">Media Market</h1>
                  <h1 className="text-sm text-[#808080] mt-4">Gillie</h1>
                  <h1 className="text-sm text-[#808080] mt-4">Size Last</h1>
                </div>
                <div className="lg:w-[109px] w-full lg:mt-0 mt-4">
                  <h1 className="text-sm text-[#808080]">Self Betimes</h1>
                  <h1 className="text-sm text-[#808080] mt-4">
                    Yatırımcı İlişkileri
                  </h1>
                  <h1 className="text-sm text-[#808080] mt-4">Basal Himmler</h1>
                </div>
                <div className="lg:w-[88px] w-full lg:mt-0 mt-4">
                  <h1 className="text-sm text-[#808080]">Yard Market</h1>
                  <h1 className="text-sm text-[#808080] mt-4">Is İmkanları</h1>
                  <h1 className="text-sm text-[#808080] mt-4">
                    Car Tercihleri
                  </h1>
                </div>
                <div className="lg:w-[120px] w-full lg:mt-0 mt-4">
                  <h1 className="text-sm text-[#808080]">Hedge Karla</h1>
                  <h1 className="text-sm text-[#808080] mt-4">
                    Mullein Koşulları
                  </h1>
                  <h1 className="text-sm text-[#808080] mt-4">
                    Autumnal Bulgier
                  </h1>
                </div>
              </div>
              <div className="lg:flex justify-between items-center mt-12">
                <div className="">
                  <button className="border bg-transparent  text-[#808080] border-[#808080] px-3 lg:w-[135px] w-full py-3 hover:bg-black duration-150 ">
                    Helmet KOD
                  </button>
                </div>
                <div className="lg:mt-0 mt-12 ">
                  <Image
                    className="cursor-pointer "
                    src="/Social.svg"
                    width={172.7}
                    height={26}
                    alt="Social"
                  />
                </div>
              </div>
              <h1 className="text-xs text-[#808080] mt-8">
                © 1997-2021 Netflix, Inc.i-062d573a0ee099242{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
