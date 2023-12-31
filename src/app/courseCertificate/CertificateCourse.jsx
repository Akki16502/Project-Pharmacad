import React from "react";
import Image from "next/image";
import small from "../../../public/small.webp";
import orsmall from "../../../public/orsmall.webp";
import Almas from "../../../public/Almas.webp";
import Sammaam from "../../../public/Sammaam.webp";
import Vector from "../../../public/Vector.webp";
import Footer from "@/components/footer";
import Link from "next/link";

export default function CourseCertificate() {
  return (
    // <div className="container mx-auto max-w-screen-xl px-4 py-8">
    <>
      <div className="absolute w-full sm:w-[461px] h-[35px] left-[18px] lg:left-[212px] md:left-[212px] sm:left-[18px] top-[140px] sm:top-[180px] md:top-[240px] lg:top-[170px]">
        <h1 className="font-inter font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl leading-tight">
          Certificate Courses
        </h1>
      </div>
      <div className="hidden sm:hidden lg:block md:hidden">
        <div className="absolute top-[300px] left-[337.5px] box-border w-[39px] h-px border-t-[1px] border-dashed border-gray-800" />
        <div className="absolute top-[300px] left-[512.5px] box-border w-[39px] h-px border-t-[1px] border-dashed border-gray-800" />
        <div className="absolute top-[300px] left-[656.5px] box-border w-[39px] h-px border-t-[1px] border-dashed border-gray-800" />
        <div className="absolute top-[300px] left-[819px] box-border w-[34px] h-px border-t-[1px] border-dashed border-gray-800" />
        <div className="absolute top-[300px] left-[1051.5px] box-border w-10 h-px border-t-[1px] border-dashed border-gray-800" />
        <div className="absolute top-[270px]  font-bold left-[212px] shadow-green-400 rounded-md text-center bg-whitesmoke-500  box-border w-[126px] h-[58px] border-[2px] border-solid border-green-400">
          100% online courses
        </div>
        <div className="absolute top-[270px] font-bold left-[376px] shadow-green-400 rounded-md text-center bg-whitesmoke-500  box-border w-[137px] h-[58px] border-[2px] border-solid border-green-400">
          Certificate on completion
        </div>
        <div className="absolute top-[270px] font-bold left-[551px] shadow-green-400 rounded-md text-center bg-whitesmoke-200  box-border w-[106px] h-[58px] border-[2px] border-solid border-green-400">
          Flexible schedule
        </div>
        <div className="absolute top-[270px] font-bold left-[695px] shadow-green-400 rounded-md text-center bg-whitesmoke-500  box-border w-[126px] h-[58px] border-[2px] border-solid border-green-400">
          Learn from industry expert
        </div>
        <div className="absolute top-[270px] font-bold left-[852px] shadow-green-400 rounded-md text-center bg-whitesmoke-500  box-border w-[200px] h-[58px] border-[2px] border-solid border-green-400">
          Job / Internship placement assistance
        </div>
        <div className="absolute top-[270px] font-bold left-[1091px] shadow-green-400 rounded-md text-center bg-whitesmoke-500 box-border w-36 h-[58px] border-[2px] border-solid border-green-400">
          Doubt solving by expert
        </div>
      </div>
      <div>
        <div className="-mt-[40px]">
          <div className="box-border sm:hidden lg:block md:hidden hidden absolute w-[1037px] h-[410px] left-[212px] top-[420px] bg-white border border-opacity-60 border-gray-300 shadow-md rounded-2xl">
            <div className="absolute -mt-3 left-[38px] rounded-bl-xl rounded-tr-xl rounded-br-xl [background:linear-gradient(93.54deg,_#020a78,_#8e00fd)] shadow-[0px_5.473354339599609px_9.12px_rgba(0,_0,_0,_0.25)] w-[276.4px] h-[218.23px]">
              <Image
                className="-ml-5"
                src={small}
                width={23}
                height={11}
                alt="Small Image"
              ></Image>
              <div className="absolute top-[14px] left-[35px] leading-[141%] text-xl text-white font-extrabold font-inter inline-block ">
                Pharmacovigilance
              </div>
              <div className="absolute top-[50px] left-[35px] font-montserrat font-semibold text-xs leading-snug leading-trim text-capitalize tracking-widest text-white">
                <ul className="list-none">
                  <li>
                    <strong>12</strong> MODULES (PRE-RECORDED)
                  </li>
                  <li className="my-1">
                    <strong>1 </strong> LIVE INTERACTIVE SESSION
                  </li>
                  <li className="my-1">ASSESSMENT TEST</li>
                  <li className="my-1">100% PLACEMENT ASSISTANCE</li>
                  <li className="my-1">COURSE COMPLETION CERTIFICATE</li>
                  <li className="my-1">LIFETIME ACCESS</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="hidden sm:hidden md:hidden lg:block">
                <div className="flex flex-col ">
                  <Image
                    className="mt-[230px] ml-10"
                    src={Almas}
                    width={112}
                    height={140}
                    alt="Ms. Almas Sayed"
                  />
                </div>
              </div>
              <div className="flex mt-[230px] ml-4">
                <p className="text-sm">
                  Expertly created by<br></br>
                  <strong>Ms. Almas Sayed</strong>
                  <br></br>
                  Pharmacovigilance and Medical <br></br>
                  Writing Subject Matter Expert (SME).<br></br>
                  Certified trainer (16 years of <br></br>
                  experience) in Clinical Research and<br></br>
                  Pharmacovigilance Industry.
                </p>
              </div>
              <div className="mt-[30px] ml-8">
                <p>
                  More than 8000 licensed drug manufacturers recruiting PV
                  professionals.<br></br>
                  Our Certificate Course for Pharmacovigilance is the step to
                  success!!
                </p>
              </div>
              <div className="absolute top-[110px] left-[440px] w-[258.25px] h-[191.28px] text-sm">
                <div className="absolute -mt-2 left-[32.25px] font-semibold">
                  <p className="m-0 my-2 whitespace-nowrap">
                    Knowledge about pharmacovigilance & clinical research
                  </p>
                  <p className="m-0 my-2 whitespace-nowrap">
                    Exposure to allied domains (medical writing / medical
                    coding)
                  </p>
                  <p className="m-0 my-2 whitespace-nowrap">
                    Hands on training with case studies & assignments
                  </p>
                  <p className="m-0 my-2 whitespace-nowrap">
                    Course completion certificate to upgrade your Profile
                  </p>
                  <p className="m-0 my-2 whitespace-nowrap">
                    Advantage over other candidates for PV / CR interviews
                  </p>
                  <p className="m-0 my-2 whitespace-nowrap">
                    Live doubt solving session
                  </p>
                  <p className="m-0 my-2 whitespace-nowrap">
                    Raising Finance for the Company
                  </p>
                </div>
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[1%] right-[91.68%] bottom-[89.32%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[16%] right-[91.68%] bottom-[76.56%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[30%] right-[91.68%] bottom-[63.8%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[44%] right-[91.68%] bottom-[51.04%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[59%] right-[91.68%] bottom-[38.28%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[74%] right-[91.68%] bottom-[25.52%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[88%] right-[91.68%] bottom-[12.76%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
              </div>
            </div>

            <div className="ml-[600px] -mt-[35px]">
              <Link href="https://pharmac.courses.store/300626?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">
                <button className="bg-[#D9D9D9] w-[125px] h-[38px] py-2 px-4 rounded text-black">
                  Enroll now
                </button>
              </Link>
            </div>
            <div className="ml-[750px]   -mt-[38px]">
              <Link
                legacyBehavior
                href="/pdf/Pharmacad.pdf"
                className="text-lg leading-6 text-[#3A47FB] font-thin font-montserrat"
                passHref
              >
                <a target="_blank" download>
                  <button className="bg-[#3A47FB] w-[160px] h-[38px] text-sm text-white py-2 px-4 rounded whitespace-nowrap">
                    Download Brochure
                  </button>
                </a>
              </Link>
            </div>
          </div>

          <div className="box-border absolute sm:hidden lg:block md:hidden hidden w-[1037px] h-[410px] left-[212px] top-[920px] bg-white border border-opacity-60 border-gray-300 shadow-md rounded-2xl">
            <div className="absolute -mt-3 left-[38px] rounded-bl-xl rounded-tr-xl rounded-br-xl [background:linear-gradient(93.54deg,_#780902,_#FD5B00)] shadow-[0px_5.473354339599609px_9.12px_rgba(0,_0,_0,_0.25)] w-[276.4px] h-[232.23px]">
              <Image
                className="-ml-5 "
                src={orsmall}
                width={23}
                height={13}
                alt="Other Small Image"
              ></Image>
              <div className="absolute top-[8px] left-[35px] leading-[141%] text-xl text-white font-extrabold font-inter inline-block ">
                Intellectual Patent Rights (IPR)
              </div>
              <div className="absolute top-[50px] left-[35px] font-montserrat font-semibold text-xs leading-snug leading-trim text-capitalize tracking-widest text-white">
                <ul className="list-none my-7">
                  <li>
                    <strong>12</strong> MODULES (PRE-RECORDED)
                  </li>
                  <li className="my-1">
                    <strong>1 </strong> LIVE INTERACTIVE SESSION
                  </li>
                  <li className="my-1">ASSESSMENT TEST</li>
                  <li className="my-1">INTERNSHIP PROVIDED</li>
                  <li className="my-1">COURSE COMPLETION CERTIFICATE</li>
                  <li className="my-0">LIFETIME ACCESS</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <Image
                  className="mt-[238px] ml-10 hidden sm:hidden md:hidden lg:block"
                  src={Sammaam}
                  width={112}
                  height={140}
                  alt="Ms. Almas Sayed"
                />
              </div>
              <div className="flex mt-[238px] ml-4">
                <p className="text-sm">
                  Expertly created by<br></br>
                  <strong>Mrs. Sampada Mehta</strong>
                  <br></br>
                  Manager, Appropriate IP services <br></br>
                  Ex - Sunpharma (6 years) & <br></br>
                  Rubicon (1 year). <br></br>
                </p>
              </div>
              <div className="mt-[30px] ml-[55px]">
                <p>
                  According to WIPO, numbers of patents file in India in 2018
                  was <br></br>
                  2.5 greater than 2009,the economy in the same period was
                  doubled.
                </p>
              </div>
              <div className="absolute top-[112px] left-[440px] w-[258.25px] h-[191.28px] text-sm">
                <div className="absolute -mt-1.5 left-[32.25px] font-semibold">
                  <p className="m-0 my-2 whitespace-nowrap">
                    Safeguard the Unique Ideas
                  </p>
                  <p className="m-0 my-2 whitespace-nowrap">
                    Boosts Business Growth
                  </p>
                  <p className="m-0 my-2 whitespace-nowrap">
                    Easing the Marketing Process
                  </p>
                  <p className="m-0 my-2 whitespace-nowrap">
                    Protects Consumer and Families
                  </p>
                  <p className="m-0 my-2 whitespace-nowrap">
                    Improve Business Exports
                  </p>
                  <p className="m-0 my-2 whitespace-nowrap">
                    Technology Transfer
                  </p>
                  <p className="m-0 my-1.5 whitespace-nowrap">
                    100% placement assistance to students for PV/CR related Jobs
                  </p>
                  <p className="m-0 my-1.5 whitespace-nowrap">
                    Create High- Income Job
                  </p>
                </div>
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[1%] right-[91.68%] bottom-[89.32%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[16%] right-[91.68%] bottom-[76.56%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[30%] right-[91.68%] bottom-[63.8%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[44%] right-[91.68%] bottom-[51.04%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[59%] right-[91.68%] bottom-[38.28%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[74%] right-[91.68%] bottom-[25.52%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[88%] right-[91.68%] bottom-[12.76%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
                <Image
                  className="absolute h-[10.68%] w-[8.32%] top-[102.5%] right-[91.68%] bottom-[12.76%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt="greentick"
                  src={Vector}
                  width={22}
                  height={22}
                />
              </div>
            </div>

            <div className="ml-[600px] -mt-[10px]">
              <Link href="https://pharmac.courses.store/313031?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">
                <button className="bg-[#D9D9D9]  w-[125px] h-[38px] py-2 px-4 rounded">
                  Enroll now
                </button>
              </Link>
            </div>
            <div className="ml-[750px]   -mt-[38px]">
              <Link
                legacyBehavior
                href="/pdf/IPR.pdf"
                className="text-lg leading-6 text-[#3A47FB] font-thin font-montserrat"
                passHref
              >
                <a target="_blank" download>
                  <button className="bg-[#3A47FB] w-[160px] h-[38px] text-sm text-white py-2 px-4 rounded whitespace-nowrap">
                    Download Brochure
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* small and md screen code */}
      <div className="absolute -mt-[185px]">
        <div className="box-border sm:block lg:hidden md:block absolute w-[290px] h-[896px] left-[18px] sm:left-[18px] md:left-[45px] top-[350px] bg-white border border-opacity-60 border-gray-300 shadow-md rounded-2xl">
          <div className="absolute -mt-[6px] left-[14px] rounded-bl-xl rounded-tr-xl rounded-br-xl [background:linear-gradient(93.54deg,_#020a78,_#8e00fd)] shadow-[0px_5.473354339599609px_9.12px_rgba(0,_0,_0,_0.25)] w-[265px] h-[230.23px]" />
          <Image
            className="-ml-1 -mt-1.5"
            src={small}
            width={23}
            height={13}
            alt="Small Image"
          ></Image>
          <div className="absolute top-[8px] left-[35px] text-white text-[22.81px] leading-[141%] font-extrabold font-inter text-card-background inline-block w-[248px]">
            Pharmacovigilance
          </div>
          <div className="absolute top-[55px] left-[40px] text-white text-[13px] tracking-[0.04em] leading-[163.5%] text-card-background inline-block w-[222.58px]">
            <p className="-mt-1">
              <span className="font-semibold font-montserrat">12</span>
              <span className="font-montserrat"> MODULES (PRE-RECORDED)</span>
            </p>
            <p className="my-1">
              <span className="uppercase">
                <span className="font-semibold font-montserrat">1</span>
                <span> live interactive session</span>
              </span>
            </p>
            <p className="my-1">
              <span className="uppercase">
                <span>Assessment test</span>
              </span>
            </p>
            <p className="my-1">
              <span className="uppercase">
                <span>Internship provided</span>
              </span>
            </p>
            <p className="my-1 uppercase">
              <span>Completion certificate</span>
            </p>

            <p className="my-1">
              <span className="uppercase">
                <span>Lifetime access</span>
              </span>
            </p>
          </div>

          <p className="mt-[240px] ml-5 text-[12px]">
            More than 8000 licensed drug <br></br>
            manufacturers recruiting PV professionals.<br></br>
            Our Certificate Course for Pharmacovigilance<br></br>
            is the step to success!!<br></br>
          </p>
          <div className="absolute top-[340px] ml-5 w-[258.25px] h-[191.28px] text-[12px]">
            <div className="absolute  left-[32.25px] leading-[183.5%] font-semibold">
              <p className="m-0">
                Knowledge about pharmacovigilance & clinical research
              </p>
              <p className="m-0">
                Exposure to allied domains (medical writing / medical coding)
              </p>
              <p className="m-0">
                Hands on training with case studies & assignments
              </p>
              <p className="m-0">
                Course completion certificate to upgrade your Profile
              </p>
              <p className="m-0">
                Advantage over other candidates for PV / CR interviews
              </p>
              <p className="m-0">Live doubt solving session</p>
              <p className="my-1">
                100% placement assistance to students for PV/CR related Jobs
              </p>
            </div>
            <div className="my-4">
              <Image
                className="-mt-4"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-[24px]"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-[20px]"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-[23px]"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-[23px]"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-[18px]"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-[8px]"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
            </div>
          </div>
          <div className="mt-[330px] ml-5 ">
            <p className="text-[12]">
              Expertly created by<br></br>
              <strong>Ms. Almas Sayed</strong>
              <br></br>
            </p>
            <p className="text-[11px] my-1">
              Pharmacovigilance and Medical <br></br>
              Writing Subject Matter Expert (SME).<br></br>
              Certified trainer (16 years of <br></br>
              experience) in Clinical Research and<br></br>
              Pharmacovigilance Industry.
            </p>
          </div>

          <div className="flex space-x-2">
            <div>
              <Link href="https://pharmac.courses.store/300626?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">
                <button className="bg-[#D9D9D9] mt-8 ml-1 text-[12px] w-[125px] h-[33px] py-2 px-4 rounded">
                  Enroll now
                </button>
              </Link>
            </div>
            <div>
              <Link
                legacyBehavior
                href="/pdf/Pharmacad.pdf"
                className="text-lg leading-6 text-[#3A47FB] font-thin font-montserrat"
                passHref
              >
                <a target="_blank" download>
                  <button className="bg-[#3A47FB] w-[137px] ml=2 mt-8 h-[33px] text-[11px] text-white py-2 px-4 rounded whitespace-nowrap">
                    Download Brochure
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="box-border sm:block lg:hidden md:block absolute w-[290px] h-[830px] md:h-[900px] left-[18px] sm:left-[18px] md:left-[450px] top-[1300px] sm:top-[350px] md:top-[350px]  bg-white border border-opacity-60 border-gray-300 shadow-md rounded-2xl">
          <div className="absolute -mt-[6px] left-[16px] rounded-bl-xl rounded-tr-xl rounded-br-xl [background:linear-gradient(93.54deg,_#780902,_#fd5b00)]  shadow-[0px_5.473354339599609px_9.12px_rgba(0,_0,_0,_0.25)] w-[265px] h-[230px]" />

          <Image
            className="-ml-0 -mt-1.5"
            src={orsmall}
            width={23}
            height={11}
            alt="Other Small Image"
          ></Image>
          <div className="absolute top-[8px] left-[40px] text-white text-[22.81px] leading-[141%] font-extrabold font-inter text-card-background inline-block w-[248px]">
            Intellectual Patent Rights (IPR)
          </div>
          <div className="absolute top-[80px] left-[45px] text-white text-[13px] tracking-[0.04em] leading-[163.5%] text-card-background inline-block w-[222.58px]">
            <p className="-mt-1">
              <span className="font-semibold font-montserrat">12</span>
              <span className="font-montserrat"> MODULES (PRE-RECORDED)</span>
            </p>
            <p className="my-1">
              <span className="uppercase">
                <span className="font-semibold font-montserrat">1</span>
                <span> live interactive session</span>
              </span>
            </p>
            <p className="my-1">
              <span className="uppercase">
                <span>Assessment test</span>
              </span>
            </p>
            <p className="my-1">
              <span className="uppercase">
                <span>Internship provided</span>
              </span>
            </p>
            <p className="my-1 uppercase">
              <span>Completion certificate</span>
            </p>

            <p className="my-1">
              <span className="uppercase">
                <span>Lifetime access</span>
              </span>
            </p>
          </div>

          <p className="mt-[240px] ml-5 text-[12px]">
            According to WIPO, numbers of patents file<br></br>
            in India in 2018 was 2.5 greater than 2009, the<br></br>
            economy in the same period was doubled.<br></br>
          </p>

          <div className="absolute top-[340px] ml-5 w-[258.25px] h-[191.28px] text-[12px]">
            <div className="absolute  left-[32.25px] leading-[183.5%] font-semibold">
              <p className="m-0">Safeguard the Unique Ideas</p>
              <p className="my-1">Boosts Business Growth</p>
              <p className="my-1">Easing the Marketing Process </p>
              <p className="my-2">Protects Consumer and Families</p>
              <p className="my-1">Improve Business Exports</p>
              <p className="my-2">Technology Transfer</p>
              <p className="my-2">
                100% placement assistance to students for PV/CR related Jobs.
              </p>
              <p className="-mt-1.5">Create High - Income Job</p>
            </div>
            <div className="my-4">
              <Image
                className="-mt-4"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-1"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-1.5"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-2"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-2"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-1.5"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-2.5"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
              <Image
                className="mt-5"
                alt="greentick"
                src={Vector}
                width={22}
                height={22}
              />
            </div>
          </div>
          <div className="mt-[315px] sm:mt-[345px] md:mt-[345px] ml-5 ">
            <p className="text-[12]">
              Expertly created by<br></br>
              <strong>Mrs. Sampada Mehta</strong>
              <br></br>
            </p>
            <p className="text-[11px] sm:my-4 md:my-4 my-1">
              Manager, Appropriate IP services <br></br>
              Ex - Sunpharma (6 years) & Rubicon (1 year).<br></br>
            </p>
          </div>

          <div className="flex space-x-2 my-4 sm:mt-[44px] md:mt-[44px]">
            <div>
              <Link href="https://pharmac.courses.store/313031?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp">
                <button className="bg-[#D9D9D9] mt-8 ml-1 w-[125px] text-[12px] h-[33px] py-2 px-4 rounded ">
                  Enroll now
                </button>
              </Link>
            </div>
            <div>
              <Link
                legacyBehavior
                href="/pdf/IPR.pdf"
                className="text-lg leading-6 text-[#3A47FB] font-thin font-montserrat"
                passHref
              >
                <a target="_blank" download>
                  <button className="bg-[#3A47FB] w-[137px] ml=2 mt-8 h-[33px] text-[11px] text-white py-2 px-4 rounded whitespace-nowrap">
                    Download Brochure
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[2000px] lg:mt-[1350px] sm:mt-[1150px] md:mt-[1150px]">
        <Footer />
      </div>
    </>
  );
}
