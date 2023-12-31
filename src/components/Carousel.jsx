"use client";

import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/legacy/image";

import image1c from "../../public/image1c.webp";
import image2c from "../../public/image2c.webp";
import image3c from "../../public/image3c.webp";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isMobileView, setIsMobileView] = React.useState(false);
  const [MaxIndex, setMaxIndex] = useState(1);

  const slides = [
    {
      path: image1c,
      alt: "Slide 1",
      width: 1280,
      height: 720,
    },
    {
      path: image2c,
      alt: "Slide 2",
      width: 3508,
      height: 2480,
    },
    {
      path: image3c,
      alt: "Slide 3",
      width: 1334,
      height: 720,
    },
  ];

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
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768);
  };

  React.useEffect(() => {
    setIsMobileView(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getVisibleSlides = () => {
    if (isMobileView) {
      return [slides[currentIndex]];
    } else {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      const nextIndex = (currentIndex + 1) % slides.length;
      return [slides[prevIndex], slides[currentIndex], slides[nextIndex]];
    }
  };

  return (
    <div className="container mx-auto max-w-screen-xl px-4 pb-8 relative group">
      <div
        className={`grid gap-4 ${
          isMobileView
            ? "grid-cols-1 transition-opacity duration-500"
            : "grid-cols-3"
        }`}
      >
        {getVisibleSlides().map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`relative h-[0] pb-[56.25%] rounded-2xl overflow-hidden`}
          >
            <Image
              src={slide.path}
              alt={slide.alt}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="w-full h-full"
              width={slide.width}
              height={slide.height}
            />
          </div>
        ))}
      </div>
      {/* Left Arrow */}
      {!isMobileView && (
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-100%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
      )}
      {/* Right Arrow */}
      {!isMobileView && (
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-100%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
      )}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-black" : "text-gray-500"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
