import React from "react";
import aboutImg1 from "../../public/Img1.webp";
import aboutImg2 from "../../public/Img2.webp";
import Image from "next/image";
const About = () => {
  return (
    <div className="bg-[#f2fff0]" id="about">
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-8/12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-4xl font-bold font-inter leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-lg text-lg leading-6 font-montserrat text-gray-600 ">
              India’s Best Coaching Class for M. Pharmacy, MBA entrance exams &
              Abroad Studies for Pharmacy students. Experts in GPAT, NIPER,
              BITS, Manipal, ICT & other entrance exams, also MBA entrance  (CAT
              / NMAT / CET / SNAP / XAT / CMAT, etc.) exams. More than 30 tutors
              & content creators from India’s top ranked institutes like NIPER,
              BITS, ICT, BCP, Punjab University etc., working together to
              provide you the best & quality education via offline & online
              platform.
            </p>
            <p className="text-lg leading-6 text-gray-600 mt-8">We offer</p>
            <ul className="list-disc list-inside">
              <li className="font-semibold text-lg font-montserrat leading-6 text-gray-600 ">
                Extensive guidance for GPAT NIPER and other entrance exams for
                Pharmacy
              </li>
              <li className="font-semibold text-lg font-montserrat leading-6 text-gray-600 ">
                Well structured course work for MBA aspirants
              </li>
              <li className="font-semibold text-lg font-montserrat leading-6 text-gray-600 ">
                Industrial affiliations, training programs and certification
                courses to make students job ready
              </li>
            </ul>
            <p className="font-lg text-lg leading-6 font-montserrat text-gray-600 mt-11">
              Pharmacad also provides Industrial training, career counseling, B.
              Pharmacy & D. Pharmacy coaching, industrial affiliated certificate
              courses like Pharmacovigilance, Intellectual Property Rights,
              Regulatory Affairs, Clinical Research Management etc.
            </p>
          </div>
          <div className="md:block">
            <div className="w-full lg:w-8/12">
              <Image
                className="w-auto h-auto"
                src={aboutImg2}
                alt="SVG image"
              />
            </div>
            <div className="w-full lg:w-8/12">
              <Image
                className="w-auto h-auto my-10 "
                src={aboutImg1}
                alt="SVG image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
