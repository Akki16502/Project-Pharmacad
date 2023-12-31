"use client";
import React, { useState } from "react";
import Link from "next/link";
// import gpat from "./gpat-syllabus.pdf";
const Faq = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8" id="faq">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-4xl font-bold font-inter">
          Your FAQ&apos;s - answered by us
        </h1>
      </div>

      <div className="w-full mx-auto">
        {/* <!-- Question 1 --> */}
        <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

        <div className="w-full md:px-6  ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className=" ">
              <p
                className="flex font-inter justify-center items-center font-medium text-lg leading-6 md:leading-4 text-black"
                onClick={() => setOpen(!open)}
                style={{ cursor: "pointer" }}
              >
                What is the GPAT syllabus?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen(!open)}
            >
              <svg
                className={"transform " + (open ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open ? "block" : "hidden")}
          >
            <Link
              legacyBehavior
              href="/pdf/gpatSyllabus.pdf"
              className="text-lg leading-6 text-[#3A47FB] font-thin font-montserrat"
              passHref
            >
              <a target="_blank" download>
                Download GPAT Syllabus (PDF)
              </a>
            </Link>
          </div>
        </div>

        {/* <!-- Question 2 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p
                className="flex font-inter justify-center items-center font-medium text-lg leading-6 lg:leading-4 text-black"
                onClick={() => setOpen2(!open2)}
                style={{ cursor: "pointer" }}
              >
                What is the paper pattern and exam time for GPAT?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen2(!open2)}
            >
              <svg
                className={"transform " + (open2 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open2 ? "block" : "hidden")}
          >
            <p className="text-lg leading-6 text-gray-600 font-thin font-montserrat">
              Consists of around 125 questions carrying 4 marks for each correct
              answer, with a negative marking of 1 mark for each incorrect
              answer. Duration of the exam is 3 hours.
            </p>
          </div>
        </div>

        {/* <!-- Question 3 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p
                className="flex font-inter justify-center items-center font-medium text-lg leading-6 lg:leading-4 text-black"
                onClick={() => setOpen3(!open3)}
                style={{ cursor: "pointer" }}
              >
                What are the other entrance for M Pharmacy?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen3(!open3)}
            >
              <svg
                className={"transform " + (open ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open3 ? "block" : "hidden")}
          >
            <p className="text-lg font-montserrat leading-6 text-gray-600 font-thin">
              NIPER JEE: National Institute of Pharmaceutical Education and
              Research Joint Entrance Examination , BITS HD Pharmacy: Birla
              Institute of Technology and Science Higher Degree Pharmacy
              Entrance Exam , MANIPAL MET: Manipal University Online Entrance
              Test for Pharmacy , NMAT/ATMA , NIRMA
            </p>
          </div>
        </div>

        {/* <!-- Question 4 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6  ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p
                className="flex font-inter justify-center items-center font-medium text-lg leading-6 lg:leading-4 text-black"
                onClick={() => setOpen4(!open4)}
                style={{ cursor: "pointer" }}
              >
                When should I start preparing for Masters program?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen4(!open4)}
            >
              <svg
                className={"transform " + (open4 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open4 ? "block" : "hidden")}
          >
            <p className="text-lg font-montserrat leading-6 text-gray-600 font-thin">
              End of the second year and start of the third year is the best
              time to start the preparation for any entrance exam, since the the
              syllabus is vast and practice is must for national level exams.
            </p>
          </div>
        </div>

        {/* <!-- Question 5 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p
                className="flex font-inter justify-center items-center font-medium text-lg leading-6 lg:leading-4 text-black"
                onClick={() => setOpen5(!open5)}
                style={{ cursor: "pointer" }}
              >
                What are the other courses we provide?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen5(!open5)}
            >
              <svg
                className={"transform " + (open5 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open5 ? "block" : "hidden")}
          >
            <p className="text-lg font-montserrat leading-6 text-gray-600 font-thin">
              Apart from GPAT, we provide NIPER, BITS, MANIPAL, MBA
              (NMAT/CET/SNAP/CAT), B Pharmacy Semester coaching, and certificate
              courses
            </p>
          </div>
        </div>

        <hr className=" w-full lg:mt-10 my-8" />

        {/* <!-- Question 6 --> */}

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p
                className="flex font-inter justify-center items-center font-medium text-lg leading-6 lg:leading-4 text-black"
                onClick={() => setOpen6(!open6)}
                style={{ cursor: "pointer" }}
              >
                Can you give GPAT in the 3rd year?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen6(!open6)}
            >
              <svg
                className={"transform " + (open6 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open6 ? "block" : "hidden")}
          >
            <p className="text-lg font-montserrat leading-6 text-gray-600 font-thin">
              Yes, you can give GPAT in third year but you will not be eligible
              for NIPER or for taking admission for masters program as only
              final year student are eligible for GPAT
            </p>
          </div>
        </div>

        <hr className=" w-full lg:mt-10 my-8" />
      </div>
    </div>
  );
};

export default Faq;
