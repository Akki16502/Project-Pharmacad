import React from "react";
import Image from "next/image";
import Link from "next/link";
import a1 from "../../public/a.webp";
import googleplay from "../../public/googleplay.svg";
const Banner = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-4 pt-8 mt-10">
        <div className="bg-[#ffff] px-6 lg:px-16 rounded-xl ">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
            <div className="flex flex-col gap-5 lg:gap-10">
              <p className=" text-xs sm:text-xl md:text-xl lg:text-xl font-medium">
                #1 COACHING CLASSES FOR PHARMACY IN MUMBAI
              </p>
              <p className=" text-2xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl">
                YOUR Dreams.
              </p>
              <p className=" text-2xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl -mt-4">
                OUR Mission.
              </p>
              <div className="flex flex-row space-x-4">
                <Link
                  target="_blank"
                  href="https://forms.gle/hoorBi1QweLwA7Nt5"
                >
                  <button className="flex flex-row justify-center items-center py-3 px-3 gap-2 w-25 h-12 border-solid border-2 border-indigo-600 bg-blue-700 shadow-md rounded-md text-white">
                    Book Free demo
                  </button>
                </Link>
                <Link href="/courses">
                  <button className="flex flex-row justify-center items-center py-3 px-3 gap-2 w-25 h-12 border-solid border-2 border-indigo-600 bg-white text-blue-600 shadow-md rounded-md ">
                    View all courses
                  </button>
                </Link>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-[#393939]">
                Pharmacad is also available on the Playstore!
              </p>
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=co.loki.pharmac"
              >
                <Image
                  className="px-3 py-1.5 flex gap-2 items-center rounded-xl"
                  src={googleplay}
                  width={200}
                  height={90}
                  alt="Google Play Button"
                />
              </Link>
            </div>
            <div>
              <Image
                priority={true}
                className="left-align"
                src={a1}
                width={750}
                height={370}
                alt="Pranav Ganatra Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
