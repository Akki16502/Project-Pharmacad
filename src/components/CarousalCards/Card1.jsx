import React from "react";
import Link from "next/link";
import "../../styles/globals.css";
import svg1 from "../../../public/bg1.webp";
import svg2 from "../../../public/arrow.webp";
import Image from "next/image";
const Card1 = () => {
  return (
    <div className="max-w-[1321px] h-[145px] flex bg-black">
      <div className="flex">
        <div className="">
          <div className="w-[266px] h-[75px] ml-[158px] mt-[34px] z-10 flex flex-col">
            <span className="text-4xl text-white font-extrabold">
              Admissions
            </span>
            <span className="text-4xl text-white font-extrabold uppercase">
              Open!!
            </span>
          </div>
        </div>
        <div className="w-1/2 flex">
          <div className="w-[366px] h-[56px] ml-[42px] mt-[34px] z-10 flex">
            <div className="flex flex-col">
              <span>
                <span className="textcolour font-bold text-lg">
                  GPAT &apos;25
                </span>
                <span className="text-lg text-white ml-1">and</span>
                <span className="textcolour font-bold text-lg ml-1">
                  &apos;26
                </span>
                <span className="text-lg text-white ml-1">
                  admissions have now
                </span>
              </span>
              <span className="text-lg text-white">started!</span>
            </div>
            <button className="absolute font-semibold text-sm bg-blue-700 text-white p-3 mt-[44px] ml-[116px] cursor-pointer rounded-md">
              <Link target="_blank" href="https://forms.gle/hoorBi1QweLwA7Nt5">
                Enroll Now!!
              </Link>
            </button>
            <div className="absolute h-[15px] w-[72px] mt-16 ml-8">
              <Image src={svg2} alt="Carousel Image 1" />
            </div>
          </div>
          <div className="absolute h-[145px] bg-center bg-cover duration-500 w-[631px] ml-[220px]">
            <Image src={svg1} alt="Carousel Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
