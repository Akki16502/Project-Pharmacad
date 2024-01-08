"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import svg1 from "../../public/logo.webp";
import svg2 from "../../public/Rectangle408.svg";
import { FaBars, FaWindowClose } from "react-icons/fa";

const MENU_LIST = [
  { text: "Home", href: "#" },
  { text: "Courses", href: "/courses" },
  { text: "Certificate Courses", href: "/courseCertificate" },
  { text: "Abroad Studies", href: "#" },
  // { text: "Blogs", href: "/blog" },
  {
    text: "Youtube",
    href: "https://www.youtube.com/@Pharmacad",
    target: "_blank",
  },
  { text: "Testimonials", href: "/testimonials" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "#contact" },
];
const Navbars = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav
        className={`nav flex sticky bg-white top-0 shadow-xl h-min md:h-[100px] lg:h-min w-full`}
      >
        {/* <Link legacyBehavior href={"/"}>
          <a>
            <h1 className="logo">CodeWithMarish</h1>
          </a>
        </Link> */}
        <div className=" mb-10 justify-start z-20 w-40 mt-3 md:mt-4 mb:10 md:justify-start md:ml-4 md:z-40 md:h-5 md:w-20 md:top-3 lg:mt-5 lg:justify-start lg:fixed lg:ml-4 lg:z-20 lg:h-40 lg:w-40 lg:top-3 xl:mt-5 xl:justify-start xl:ml-24 xl:z-20 xl:h-35 xl:w-40 xl:fixed xl:top-3">
          <Image
            className="z-30 absolute ml-6 md:absolute md:z-40 md:ml-6 mt-5 sm:mt-5 md:mt-8 lg:absolute lg:z-40 lg:ml-4 lg:mt-6 xl:z-40 xl:ml-4 xl:mt-6"
            src={svg1}
            width={80}
            height={80}
            alt="logo"
          />
          <Image
            className="hidden lg:block lg:absolute lg:z-20 xl:block xl:absolute xl:z-30"
            src={svg2}
            width={110}
            height={110}
            alt="logo bg"
          />
        </div>
        <div className="bg-white md:mt-14 lg:fixed lg:left-0 lg:bg-white lg:w-full lg:z-10 lg:mt-0 lg:pt-6 xl:bg-white xl:fixed xl:left-0 xl:w-full xl:z-10">
          <div className="hidden lg:flex lg:pl-2 lg:bg-white lg:text-black lg:justify-end lg:shadow-xl xl:w-full xl:flex xl:pl-4 xl:py-2 xl:text-black xl:justify-centre xl:shadow-xl xl:bg-white">
            <div
              className={`${
                navActive ? "active" : ""
              } lg:flex lg:px-2 xl:ml-10 xl:flex xl:mr-16`}
            >
              {MENU_LIST.map((menu, idx) => (
                <div
                  className="lg:px-4 lg:py-2 xl:px-4 xl:py-2 hover:font-semibold hover:underline"
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem
                    active={activeIdx === idx}
                    {...menu}
                    target={menu.target}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <div
            onClick={() => setNavActive(!navActive)}
            className={`absolute right-0 float-right mr-6 mt-5 text-3xl lg:hidden`}
          >
              <button className={'w-10 h-10 cursor-pointer'}>{navActive ? <FaWindowClose/> : <FaBars />}</button>
          </div> */}

          {/* mobile view */}
          {/* <div className={`bg-white z-50 flex flex-col absolute top-28 gap-y-2 cursor-pointer w-72 px-6 transition-all lg:hidden ${navActive ? "right-0" : "-right-96"}`}>
                <div className={`${navActive ? "active" : ""} nav__menu-list `}>
                {MENU_LIST.map((menu, idx) => (
                  <div
                    className = "py-4 hover:font-semibold hover:underline"
                    onClick={() => {
                      setActiveIdx(idx);
                      setNavActive(false);
                    }}
                    key={menu.text}
                  >
                    <NavItem active={activeIdx === idx} {...menu} />
                  </div>
                ))}
              </div>
              </div>
      </div> */}

          {/* mobile view */}
          <div>
            <div
              className={`${
                navActive ? "active" : ""
              } nav__menu-list bg-white z-50 flex flex-col absolute md:top-36 gap-y-2 cursor-pointer w-24 px-6 transition-all lg:hidden items-centre ml-36`}
            >
              {MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    // className = "py-4 hover:font-semibold hover:underline";
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              ))}
            </div>
            {/* <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div> */}
            <div
              onClick={() => setNavActive(!navActive)}
              className={`absolute right-0 float-right mr-6 top-8 text-3xl lg:hidden`}
            >
              <button
                aria-label="Navbar-menu"
                className={"w-10 h-10 cursor-pointer"}
              >
                {navActive ? <FaWindowClose /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbars;
