import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [sideBar, setsideBar] = useState();
  return (
    <div className="overflow-x-hidden ">
      <div className="">
        <div className="relative block group pb-44">
          <Image
            className="absolute inset-0 object-cover w-full  
              h-full"
            src="/image 1.png"
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
                    <button className="text-[17px] text-white  pb-4 px-3 border-b ">
                      Home
                    </button>
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
                  <Link href="/mountains">
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
                  <Link href="/mountains">
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
                  </Link>
                  <Link href="/mountains">
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
                  </Link>
                  <Link href="/mountains">
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
                  </Link>
                  <Link href="/mountains">
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
                  </Link>
                  <Link href="/mountains">
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
                  </Link>
                  <Link href="/mountains">
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
                  </Link>
                  <Link href="/mountains">
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
                  </Link>
                  <Link href="/mountains">
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
                  </Link>

                  <Link href="/mountains">
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
                  </Link>
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
            spaceBetween={5}
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
            <div className="px-5">
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto "
                  src="/Frame 16.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto "
                  src="/Frame 17.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto "
                  src="/Frame 18.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto "
                  src="/Frame 16.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto "
                  src="/Frame 17.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto"
                  src="/Frame 18.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto"
                  src="/Frame 16.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
            </div>
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
                <Link href="/mountains">
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
                <Link href="/mountains">
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
                </Link>
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
                <Link href="/mountains">
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
                </Link>
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Link href="/mountains">
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
                </Link>
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Link href="/mountains">
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
                </Link>
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Link href="/mountains">
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
                </Link>
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
            </div>
          </Swiper>
        </div>
      </div>
      <div className="mt-12  lg:mt-20 lg:max-w-[1512px] w-full mx-auto lg:pl-[0px] xl:pl-[55px] 2xl:pl-[135px] pl-0 bg">
        <h1 className="text-black font-bold lg:text-[35px] md:text-[30px] text-[24px]  md:mb-8 mb-0 px-5">
          Offers
        </h1>
        <div className="px-5">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              1400: {
                width: 1400,
                slidesPerView: 2,
              },
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide className=" ">
              <div className=" lg:max-w-[761px] w-full md:flex rounded-3xl gap-5  py-5 px-3 items-center shadow-md border-zinc-50 border p">
                <div className="hidden md:block">
                  <Image
                    className="mx-auto rounded-3xl "
                    src="/image 19.png"
                    width={343.18}
                    height={233.56}
                    alt="Frame"
                  />
                </div>
                <div className="md:hidden block">
                  <Image
                    className="mx-auto w-full rounded-3xl "
                    src="/image 19.png"
                    width={343.18}
                    height={233.56}
                    alt="Frame"
                  />
                </div>
                <div className="md:mt-0 mt-5">
                  <h1 className="text-black  lg:text-[17px] md:text-[15px] text-[12px] ">
                    Domestic Flights
                  </h1>
                  <h1 className="lg:text-[20px] md:text-[18px] text-[18px] text-black font-medium mt-2">
                    Huge savings on flight with trxvl.
                  </h1>
                  <h1 className="text-black  lg:text-[17px] md:text-[15px] text-[12px] mt-3 ">
                    Book domestic flights starting @ just ₹1459
                  </h1>
                  <button className="bg-[#2659C3] text-white rounded-full py-3  lg:w-[130px] w-full lg:text-[17px] md:text-[15px] text-[12px] mt-3">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className=" lg:max-w-[761px] w-full md:flex rounded-3xl gap-5  py-5 px-3 items-center shadow-md border-zinc-50 border">
                <div className="">
                  <div className="hidden md:block">
                    <Image
                      className="mx-auto rounded-3xl "
                      src="/image 16.png"
                      width={343.18}
                      height={233.56}
                      alt="Frame"
                    />
                  </div>
                  <div className="md:hidden block">
                    <Image
                      className="mx-auto w-full rounded-3xl "
                      src="/image 16.png"
                      width={343.18}
                      height={233.56}
                      alt="Frame"
                    />
                  </div>
                </div>
                <div className="md:mt-0 mt-5">
                  <h1 className="text-black  lg:text-[17px] md:text-[15px] text-[12px] ">
                    International Flights
                  </h1>
                  <h1 className="lg:text-[20px] md:text-[18px] text-[18px] text-black font-medium mt-2">
                    Huge savings on flight with trxvl.
                  </h1>
                  <h1 className="text-black  lg:text-[17px] md:text-[15px] text-[12px] mt-3 ">
                    Book domestic flights starting @ just ₹1459
                  </h1>
                  <button className="bg-[#2659C3] text-white rounded-full py-3  lg:w-[130px] w-full lg:text-[17px] md:text-[15px] text-[12px] mt-3">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className=" lg:max-w-[761px] w-full md:flex rounded-3xl gap-5  py-5 px-3 items-center shadow-md border-zinc-50 border">
                <div className="hidden md:block">
                  <Image
                    className="mx-auto rounded-3xl "
                    src="/image 19.png"
                    width={343.18}
                    height={233.56}
                    alt="Frame"
                  />
                </div>
                <div className="md:hidden block">
                  <Image
                    className="mx-auto w-full rounded-3xl "
                    src="/image 19.png"
                    width={343.18}
                    height={233.56}
                    alt="Frame"
                  />
                </div>
                <div className="md:mt-0 mt-5">
                  <h1 className="text-black  lg:text-[17px] md:text-[15px] text-[12px] ">
                    Domestic Flights
                  </h1>
                  <h1 className="lg:text-[20px] md:text-[18px] text-[18px] text-black font-medium mt-2">
                    Huge savings on flight with trxvl.
                  </h1>
                  <h1 className="text-black  lg:text-[17px] md:text-[15px] text-[12px] mt-3 ">
                    Book domestic flights starting @ just ₹1459
                  </h1>
                  <button className="bg-[#2659C3] text-white rounded-full py-3  lg:w-[130px] w-full lg:text-[17px] md:text-[15px] text-[12px] mt-3">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className=" lg:max-w-[761px] w-full md:flex rounded-3xl gap-5  py-5 px-3 items-center shadow-md border-zinc-50 border">
                <div className="">
                  <div className="hidden md:block">
                    <Image
                      className="mx-auto rounded-3xl "
                      src="/image 16.png"
                      width={343.18}
                      height={233.56}
                      alt="Frame"
                    />
                  </div>
                  <div className="md:hidden block">
                    <Image
                      className="mx-auto w-full rounded-3xl "
                      src="/image 16.png"
                      width={343.18}
                      height={233.56}
                      alt="Frame"
                    />
                  </div>
                </div>
                <div className="md:mt-0 mt-5">
                  <h1 className="text-black  lg:text-[17px] md:text-[15px] text-[12px] ">
                    International Flights
                  </h1>
                  <h1 className="lg:text-[20px] md:text-[18px] text-[18px] text-black font-medium mt-2">
                    Huge savings on flight with trxvl.
                  </h1>
                  <h1 className="text-black  lg:text-[17px] md:text-[15px] text-[12px] mt-3 ">
                    Book domestic flights starting @ just ₹1459
                  </h1>
                  <button className="bg-[#2659C3] text-white rounded-full py-3  lg:w-[130px] w-full lg:text-[17px] md:text-[15px] text-[12px] mt-3">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="mt-12 lg:mt-20 lg:max-w-[1512px] w-full mx-auto lg:pl-[0px] xl:pl-[55px] 2xl:pl-[135px] pl-0  ">
        <div className="px-5">
          <h1 className="text-black font-bold lg:text-[35px] md:text-[30px] text-[24px] mb-8 ">
            Browse by property type
          </h1>
          <Swiper
            spaceBetween={5}
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
            <div className="">
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto "
                  src="/Frame 31.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto "
                  src="/Frame 36.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto "
                  src="/Frame 37.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto "
                  src="/Frame 31.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto "
                  src="/Frame 36.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto"
                  src="/Frame 31.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Image
                  className="mx-auto"
                  src="/Frame 37.png"
                  width={343}
                  height={221}
                  alt="Frame"
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div className=" lg:mt-20  mt-12  mx-auto lg:pl-0 xl:pl-8 2xl:pl-8 pl-0 ">
        <div className="px-5">
          <div className="relative block group ">
            <Image
              className="absolute inset-0 object-cover mx-auto rounded-3xl 
              h-full"
              src="/image 20.png"
              alt="img"
              width={1247}
              height={936}
            />
            <div className="relative lg:max-w-[1246px] w-full  mx-auto lg:p-24 md:p-20 p-12 ">
              <h1 className="text-white font-bold lg:w-[751px] w-full lg:text-[61.99px] md:text-[41.99px] text-[20.99px]">
                Plan your trip with travel expert
              </h1>
              <h1 className="text-white lg:text-[35px] md:text-[21.99px] text-[10.99px] font-normal mt-6">
                Our professional advisors can craft your perfect itinerary
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12  lg:mt-20 lg:max-w-[1512px] w-full mx-auto lg:pl-[0px] xl:pl-[55px] 2xl:pl-[135px] pl-0  ">
        <div className="px-5">
          <h1 className="text-black font-bold lg:text-[35px] md:text-[30px] text-[24px]  md:mb-8 mb-0 ">
            Connect with other travelers in our community
          </h1>
          <Swiper
            spaceBetween={20}
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
              <div className="shadow-md rounded-3xl my-5 ">
                <div className=" p-3 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto "
                    src="/Frame 32.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <h1 className="text-black lg:text-[20px] md:text-[18px] text-[14px] mt-5 ">
                    India
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-3 font-light">
                    Travel community
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-2 font-light">
                    155,073 travelers
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 ">
                <div className=" p-3 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto "
                    src="/Frame 33.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <h1 className="text-black lg:text-[20px] md:text-[18px] text-[14px] mt-5 ">
                    Travel Talk
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-3 font-light">
                    Travel community
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-2 font-light">
                    155,073 travelers
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 ">
                <div className=" p-3 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto "
                    src="/Frame 34.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <h1 className="text-black lg:text-[20px] md:text-[18px] text-[14px] mt-5 ">
                    Beach
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-3 font-light">
                    Travel community
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-2 font-light">
                    155,073 travelers
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 ">
                <div className=" p-3 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto "
                    src="/Frame 32.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <h1 className="text-black lg:text-[20px] md:text-[18px] text-[14px] mt-5 ">
                    India
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-3 font-light">
                    Travel community
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-2 font-light">
                    155,073 travelers
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 ">
                <div className=" p-3 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto "
                    src="/Frame 33.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <h1 className="text-black lg:text-[20px] md:text-[18px] text-[14px] mt-5 ">
                    Travel Talk
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-3 font-light">
                    Travel community
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-2 font-light">
                    155,073 travelers
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="shadow-md rounded-3xl my-5 ">
                <div className=" p-3 border border-gray-50 rounded-3xl">
                  <Image
                    className="mx-auto "
                    src="/Frame 34.png"
                    width={343}
                    height={221}
                    alt="Frame"
                  />
                  <h1 className="text-black lg:text-[20px] md:text-[18px] text-[14px] mt-5 ">
                    Beach
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-3 font-light">
                    Travel community
                  </h1>
                  <h1 className="text-black lg:text-[17px] md:text-[15px] text-[12px] mt-2 font-light">
                    155,073 travelers
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mt-12 lg:mt-20 hidden lg:block">
        <div className="relative block group  ">
          <Image
            className="absolute inset-0 object-cover w-full  
              h-full"
            src="/image 21.png"
            alt="img"
            width={1247}
            height={936}
          />
          <div className="relative lg:max-w-[1247px] w-full mx-auto pt-32 px-5 ">
            <div className="flex justify-between gap-12">
              <div className="w-[339.59px]">
                <Image
                  className="mx-auto"
                  src="/iPhone 13.png"
                  width={339.59}
                  height={639}
                  alt="Mobile"
                />
              </div>
              <div className="w-[854.55px]">
                <h1 className="text-white text-[53px] font-bold">
                  Your all-in-one travel app.
                </h1>
                <h1 className="text-white lg:text-[15px] xl:text-[26px] 2xl:text-[26px] text-[10px]  font-normal mt-8">
                  Book flights, hotels, trains & rental cars anywhere in the
                  world in just seconds. Get real-time flight updates, travel
                  info, exclusive deals, and 30% more Trip Coins only on the
                  app!
                </h1>
                <div className="flex justify-between">
                  <div className="">
                    <div className="flex mt-8 gap-3">
                      <div className="">
                        <style jsx>{`
                          .bt-1 {
                            background-color: rgba(255, 255, 255, 0.4);
                          }
                        `}</style>
                        <button className="text-white bt-1 py-2 px-5 rounded-full text-[22px]">
                          Mobile
                        </button>
                      </div>
                      <div className="">
                        <button className="text-white  py-2 px-5 rounded-full text-[22px]">
                          Email
                        </button>
                      </div>
                    </div>
                    <h1 className="text-white font-normal text-[15px] mt-5">
                      Enter your phone number to receive a text with a link to
                      download the app.
                    </h1>
                    <div className="">
                      <style jsx>{`
                        .bt-4 {
                          background-color: rgba(255, 255, 255, 0.4);
                        }
                      `}</style>
                      <div className="bt-4 px-3 py-3 rounded-3xl mt-5 ">
                        <div className="lg:flex justify-between">
                          <div className=" w-full ">
                            <label className="relative block w-full cursor-text">
                              <span className="sr-only">Search</span>
                              <span className="absolute inset-y-0 left-0 flex items-center pl-1  w-full text-white text-[17px]">
                                +92
                              </span>
                              <input
                                className=" placeholder:text-white py-2 pl-10  text-[17px] bg-transparent outline-none text-white "
                                placeholder=" Mobile Numbers"
                                type="text"
                                name="search"
                              />
                            </label>
                          </div>
                          <div className="">
                            <button className="rounded-full bg-white text-[#2659C3] text-[17px] w-[232px] py-2.5  mt-3 lg:mt-0">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <Image
                      className="mx-auto"
                      src="/Frame 82.svg"
                      width={17}
                      height={160}
                      alt="Frame"
                    />
                  </div>
                  <div className="mt-10">
                    <Image
                      className="mx-auto"
                      src="/playstore.png"
                      width={224.53}
                      height={67}
                      alt="playstore"
                    />
                    <Image
                      className="mx-auto mt-8"
                      src="/image 22.png"
                      width={224.53}
                      height={67}
                      alt="Apple"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
