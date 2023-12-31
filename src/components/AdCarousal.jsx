"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card1 from "./CarousalCards/Card1";
import Card2 from "./CarousalCards/Card2";

const AdCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [MaxIndex, setMaxIndex] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === MaxIndex ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, MaxIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex == 0;
    const newIndex = isFirstSlide ? MaxIndex : currentIndex - 1;
    // const newIndex  =isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === MaxIndex;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    // const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    <div className="hidden xl:block max-w-[1321px] h-[145px] m-auto mt-28 relative group">
      <div className="w-full h-full bg-center bg-cover duration-500">
        {currentIndex === 0 ? <Card1 /> : currentIndex === 1 ? <Card2 /> : ""}
      </div>
      <div className="hidden group-hover:flex h-9 w-9 border-2 border-gray-300 bg-white items-center justify-center absolute top-[38%] -translate-x-0 transalate-y-[-50%] left-[20px] rounded-sm p-2 cursor-pointer">
        <FaAngleLeft onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:flex h-9 w-9 border-2 border-gray-300 bg-white items-center justify-center absolute top-[38%] -translate-x-0 transalate-y-[-50%] right-[20px] rounded-sm p-2 cursor-pointer">
        <FaAngleRight onClick={nextSlide} />
      </div>
    </div>
  );
};

export default AdCarousal;
