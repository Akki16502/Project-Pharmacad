// Import all SVG files in the directory
import React from "react";
import Image from "next/image";

const TestimonialsCard = ({ cardData }) => {
  if (!cardData) {
    return null;
  }

  const { id, testimonial, name, rank } = cardData;
  // const str = id.toString();
  const svg =
    require(`../../public/testimonialsImages/${id}${name}.webp`).default;

  // const svg = svgMap[id];

  return (
    <div className="bg-white border border-gray-300 border-opacity-60 shadow-md rounded-lg h-max-45 text-black flex flex-row m-2 pb-4 ">
      <div className="flex flex-row items-center ">
        <div className="flex flex-col">
          <div className="mx-5 my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
          </div>
          <div className="flex flex-col w-full items-end lg:flex lg:flex-col lg:w-[62rem] lg:items-end p-4">
            <div className="px-6 font-montserrat font-thin lg:px-6 lg:font-montserrat lg:font-thin text-[#2F2F2F]">
              {testimonial}
            </div>
            <div className="px-6 font-semibold pt-4">── {name}</div>
            <div className="px-6 font-poppins font-thin text-xs  lg:px-6 lg:font-poppins lg:font-bold lg:text-sm">
              {rank}
            </div>
          </div>
        </div>

        <div className="lg:flex md:flex  flex-col items-center content-center  w-full p-0  h-full rounded-lg hidden  md:visible sm:hidden lg:visible">
          <Image
            className=" rounded-md mt-4 border-gray-600 w-[200px] h-[220px]    shadow-lg "
            src={svg}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};
export default TestimonialsCard;
