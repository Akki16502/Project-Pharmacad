import React from "react";
import { FaAngleLeft, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import coursesdata from "./coursesdata";
const CourseCard = ({ cardData }) => {
  if (!cardData) {
    return null; // Return null or handle the case when cardData is undefined
  }

  const { id, title, year, mode, status, desc, price,link } = cardData;

  return (
    <div className=" mt-7 h-full w-[310px] sm:w-[500px] md:w-[700px] lg:w-[410px] xl:w-[410px] mx-auto lg:mx-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md border-[#E5E5E5]">
      <div className="flex flex-col md:flex-row lg:flex-col xl:flex-col mt-10 ml-6 pt-7">
        <span className=" font-medium text-2xl md:text-3xl ">
          {title}{" "}
          <span className=" font-bold text-2xl md:text-3xl">{year}</span>
        </span>
        <div className="flex flex-row">
          <span
            className={`box-border uppercase ${
              mode === "OFFLINE" ? "bg-[#F5752D] " : "bg-[#5BAD09]"
            } text-white m-0 xl:m-auto p-2 lg:p-1 ml-[0px] sm:ml-7 md:ml-[150px] lg:ml-[45px] xl:ml-[16px] mt-3 md:mt-0 lg:mt-3 xl:mt-[12px] font-semibold text-sm rounded-sm`}
          >
            {mode}
          </span>
          <span
            className={`${
              status === null ? "hidden" : "block"
            } uppercase m-auto p-2 lg:p-1 px-2 font-medium text-sm bg-[#E8F0FC] ml-5 sm:ml-[25px] md:ml-[25px] lg:ml-6 xl:ml-[10px] mt-3 md:mt-[0px] lg:mt-3 xl:mt-[12px] rounded-sm`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className=" w-[272px] sm:w-[400px] md:w-[500px] lg:w-[272px] xl:w-[350px] bg-[#F5F5F5] mt-5 mx-auto xl:ml-10">
        <ul className="list-disc ml-5 p-5">
          {desc.map((item, index) => (
            <li
              key={index}
              className="font-semibold font-montserrat text-sm mt-[6px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-5 sm:ml-12 md:ml-24 lg:ml-16 xl:ml-10 mt-7">
        <Link href={`${link}`}>
          <button className=" box-border bg-[#3A47FB] shadow-xl m-auto p-3 font-semibold text-sm text-white rounded-lg">
            Order Now
          </button>
        </Link>
        <Link href="http://wa.me/+917020433566" target="_blank">
          <button className=" box-border border-2 border-[#3A47FB] text-[#3A47FB] shadow-xl m-auto p-3 font-semibold text-sm rounded-lg ml-5">
            <div className="flex flex-row">
              <span>Enquire now</span>
              <span>
                {" "}
                <FaWhatsapp className="ml-1.5 text-lg" />
              </span>
            </div>
          </button>
        </Link>
        <Link href="/#contact" aria-label="Buy Now">
          {/* <button
            className={`${
              price === null ? "hidden" : ""
            } box-border bg-[#3A47FB] text-[white] shadow-xl m-auto p-3 font-semibold text-sm rounded-lg ml-12 mt-3`}
          >
            Buy now <span className="text-[#f1f1f2] ml-1">|</span>
            <span className=" font-bold italic text-[15px] ml-1.5">
              {price}
            </span>
          </button> */}
        </Link>
      </div>
    </div>
  );
};
export default CourseCard;
