import React from "react";
import Link from "next/link";
const CoursesOffered = () => {
  const courses = [
    {
      headiing: "GPAT / NIPER / NMIMS +",
      name: "M. Pharmacy Entrance Exam-",
      description:
        "Pharmacad is India’s best coaching academy for M. Pharmacy entrance exams (GPAT | NIPER | BITS | MANIPAL etc.) having online and offline teaching platforms. The entire programme is designed to enhance conceptual learning for students to help them crack all the entrance exams for M. Pharmacy.",
    },
    {
      headiing: "CAT / MAT / CET / NMAT / XAT +",
      name: "MBA Entrance Exam-",
      description:
        "Prepare for India’s top MBA entrance exams (CAT | MAT | CET | NMAT | XAT etc.) with our experienced alumnus support from top B-schools across India like IIM, Goa Institute of Management, NMIMS and Welingkar Institute of Management etc.",
    },
    // {
    //   headiing: "CAT / MAT / CET / NMAT / XAT +",
    //   name: "Abroad Counselling-",
    //   description:
    //     "Almost 30% of Pharmacy students go abroad for higher education to countries like USA, UK, Australia, Canada, Germany etc.  Lack of dedicated education counsellors in pharmacy renders the aspirants confused regarding college and course selection. Pharmacad along with their affiliate UEMS (hyperlink to their website) specialized in abroad education counselling has created a dedicated system for pharmacy students to ensure the selection of right country, right university and right course. Our experienced team of counsellors guide the students at each and every step of the admission process. (Selecting the right date for GRE/TOEFL/IELTS, preparing LOR – Letter of recommendation, SOP – statement of purpose, Visa application & interview preparation, application form filling etc.)",
    // },
  ];

  return (
    <div
      className="container mx-auto max-w-screen-xl px-4 py-8"
      id="CoursesOffered"
    >
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-4xl font-bold font-inter">Courses Offered</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 pb-2">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-4 rounded-4xl shadow-md">
            <h2 className="text-sm font-light font-inter ">
              {course.headiing}
            </h2>
            <h3 className="text-2xl font-bold font-inter mb-2">
              {course.name}
            </h3>
            <p className="mt-2 text-gray-700 font-light font-montserrat mb-2">
              {course.description}
            </p>
            <p className="text-black font-normal font-raleway mt-4 inline-block">
              To learn more about the courses we offer,&nbsp;
              <Link
                href="/courses"
                className="text-black font-semibold font-raleway inline-block"
              >
                Click here!
              </Link>
            </p>
          </div>
        ))}
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 pb-2">
        
          <div className="bg-white p-4 rounded-4xl shadow-md">
            <h2 className="text-sm font-light font-inter ">
            CAT / MAT / CET / NMAT / XAT +
            </h2>
            <h3 className="text-2xl font-bold font-inter mb-2">
            Abroad Counselling-
            </h3>
            <p className="mt-2 text-gray-700 font-light font-montserrat mb-2">
            Almost 30% of Pharmacy students go abroad for higher education to countries like USA, UK, Australia, Canada, Germany etc.  Lack of dedicated education counsellors in pharmacy renders the aspirants confused regarding college and course selection. Pharmacad along with their affiliate <Link href="https://uemsventures.com"className="text-black font-semibold font-raleway inline-block">UEMS</Link> specialized in abroad education counselling has created a dedicated system for pharmacy students to ensure the selection of right country, right university and right course. Our experienced team of counsellors guide the students at each and every step of the admission process. (Selecting the right date for GRE/TOEFL/IELTS, preparing LOR – Letter of recommendation, SOP – statement of purpose, Visa application & interview preparation, application form filling etc.),
            </p>
            <p className="text-black font-normal font-raleway mt-4 inline-block">
              To learn more about the courses we offer,&nbsp;
              <Link
                href="/courses"
                className="text-black font-semibold font-raleway inline-block"
              >
                Click here!
              </Link>
            </p>
          </div>
          </div>
        
      <div className="flex flex-col items-left mt-8">
        <div className="justify-left md:flex md:justify-left">
          <Link href="/courses">
            <button className="bg-[#3a47fb] hover:bg-indigo-400 text-white py-2 px-4 rounded-md mr-4 font-raleway">
              View All Courses
            </button>
          </Link>
          <div className="mt-2 flex-col items-left md:flex-col md:items-left md:mt-2">
            <p className="text-semibold mb-2 md:mb-0 font-raleway">
              To book a free demo ,{" "}
              <Link
                href="https://forms.gle/hoorBi1QweLwA7Nt5"
                target="_blank"
                className="text-black font-raleway font-bold underline"
              >
                Click here!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CoursesOffered;
