import React from "react";
import Image from "next/image";
import svg1 from "../../public/cardimages/card1.svg";
import svg2 from "../../public/cardimages/card2.svg";
import svg3 from "../../public/cardimages/card3.svg";
import svg4 from "../../public/cardimages/card4.svg";
import svg5 from "../../public/cardimages/card5.svg";

const svgMap = {
  1: svg1,
  2: svg2,
  3: svg3,
  4: svg4,
  5: svg5,
};

const Card = ({ cardData }) => {
  if (!cardData) {
    return null; // Return null or handle the case when cardData is undefined
  }

  const { id, title, description } = cardData;
  const svg = svgMap[id];

  return (
    <div
      className="lg:w-241 lg:bg-white lg:rounded lg:p-1 lg:pb-3 lg:m-1 lg:max-h-full lg:h-72 sm:m-6 sm:bg-white sm:max-h-full sm:rounded-xl  bg-white rounded-lg max-h-full pb-1  mx-8"
      style={{
        background: "#ffffff",
        filter: "drop-shadow(0px 8px 17.6079px #C2F0CC)",
      }}
    >
      <div className="lg:flex-col ">
        <div className="lg:pt-3 lg:pl-3 ">
          <Image
            className="lg:mx-5 lg:mt-5 lg:w-16 lg:pt-0 sm:mt-5 sm:pt-10 sm:ml-6 sm:w-28 mt-5 pt-4 ml-6 w-16"
            src={svg}
            alt={title}
          />
        </div>
        <div
          className="lg:px-4 lg:my-0 lg:py-2 lg:w-30 lg:text-base lg:font-semibold lg:font-inter lg:mx-3 sm:px-4 sm:py-2 sm:w-30 sm:my-2 sm:text-3xl sm:font-bold sm:font-inter sm:mx-3 px-4 py-2 w-30 my-0.5 text-base font-bold font-inter mx-3"
          style={{ color: "#000000" }}
        >
          {title}
        </div>
      </div>
      <div
        className=" lg:mx-7 lg:py-0 lg:text-black lg:font-montserrat xl:test-[13px] lg:text-[12.5px] lg:font-thin lg:pb-0 lg:leading-2 lg:w-34 sm:mx-7 sm:pb-4 mx-7 pb-4 sm:text-black sm:font-montserrat sm:text-2xl sm:font-thin sm:leading-relaxed sm:w-auto w-auto leading-relaxed text-sm font-thin font-montserrat text-black"
        style={{ color: "#000000" }}
      >
        {description}
      </div>
    </div>
  );
};

export default Card;
