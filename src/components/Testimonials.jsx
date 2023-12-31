import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import data from "./testimonials_data.js";
import "../styles/globals.css";
import Link from "next/link";
const TestimonialsContainer = () => {
  const testimonialDataArray = Object.values(data);
  return (
    <div className="w-full  bg-white  lg:w-full pb-10 lg:bg-white  ">
      <div className="container mx-auto max-w-screen-xl px-4 py-8 mt-10">
        <div className="text-black font-inter font-bold text-3xl">
          Testimonials
        </div>
        <div className="text-black font-inter text-xl my-2 lg:text-black lg:font-inter lg:text-lg sm:text-[##4F4F4F] flex flex-row">
          {" "}
          <span className="px-2">━━ </span>{" "}
          <span> Here’s what our students say about us </span>
        </div>
        <div className="flex flex-col">
          {testimonialDataArray.slice(0, 3).map((cardData) => (
            <div key={cardData.id} className="lg:w-full ">
              <TestimonialsCard cardData={cardData} />
            </div>
          ))}
        </div>
        <div>
          <button className="rounded-md px-4 py-2 mx-2 my-4 bg-[#3A47FB] text-raleway font-semibold shadow-xl text-white">
            <Link href="/testimonials">Read all testimonials</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsContainer;
