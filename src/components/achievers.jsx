import React from "react";
import Image from "next/image";

import MB from "../../public/manashviB_1.webp";
import AH from "../../public/akashharia_1.webp";
import HJ from "../../public/hiraljoshi_1.webp";
import NK from "../../public/NiyatiK_1.webp";
import PS from "../../public/prachiach_1.webp";
import SS from "../../public/sakshishah_1.webp";

const Achieve = () => {
  return (
    <div className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
        <div className="container mx-auto max-w-screen-xl">
          <h1 className="text-4xl font-bold font-inter">Our Achievers</h1>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-20 xl:col-span-2 pt-10"
        >
          <li>
            <div className="flex flex-col items-center gap-x-6 rounded-4xl shadow-md">
              <Image
                className="p-3"
                // src="\manashviB_1.webp"
                src={MB}
                alt="Manashvi Bhanushali"
                height="200"
                width="200"
              />
              <div className="text-center">
                <h2 className="text-lg font-inter font-semibold leading-7 tracking-tight text-gray-900">
                  Manashvi Bhanushali
                </h2>
                <p className="text-xl font-bold font-montserrat leading-6 text-indigo-600">
                  AIR 3 GPAT 2023
                </p>
                <p className="text-base font-normal font-montserrat leading-6 text-black pb-2">
                  1<sup>st</sup> in Mumbai
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-x-6 rounded-4xl shadow-md">
              <Image
                className="p-3"
                // src="/akashharia_1.webp"
                src={AH}
                alt="akashharia"
                height="200"
                width="200"
              />
              <div className="text-center">
                <h2 className="text-lg font-inter font-semibold leading-7 tracking-tight text-gray-900">
                  Akash Haria
                </h2>
                <p className="text-xl font-bold font-montserrat leading-6 text-indigo-600">
                  AIR 21 GPAT 2022
                </p>
                {/* invisible Character */}
                <p className="text-base font-normal font-montserrat leading-6 text-black pb-2">
                  ‎
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-x-6 rounded-4xl shadow-md">
              <Image
                className="p-3"
                // src="\hiraljoshi_1.webp"
                src={HJ}
                alt="hiraljoshi"
                height="200"
                width="200"
              />
              <div className="text-center">
                <h2 className="text-lg font-inter font-semibold leading-7 tracking-tight text-gray-900">
                  Hiral Joshi
                </h2>
                <p className="text-xl font-bold font-montserrat leading-6 text-indigo-600">
                  AIR 28 GPAT 2021
                </p>
                <p className="text-base font-normal font-montserrat leading-6 text-black pb-2">
                  ‎
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-x-6 rounded-4xl shadow-md">
              <Image
                className="p-3"
                // src="\NiyatiK_1.webp"
                src={NK}
                alt="Niayti Kodange"
                height="200"
                width="200"
              />
              <div className="text-center">
                <h2 className="text-lg font-inter font-semibold leading-7 tracking-tight text-gray-900">
                  Niyati Kodange
                </h2>
                <p className="text-xl font-bold font-montserrat leading-6 text-indigo-600">
                  AIR 3 NIPER 2021
                </p>
                {/* invisible Character */}
                <p className="text-base font-normal font-montserrat leading-6 text-black pb-2">
                  ‎
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-x-6 rounded-4xl shadow-md">
              <Image
                className="p-3"
                // src="\sakshishah_1.webp"
                src={SS}
                alt="Saakshi Shah"
                height="200"
                width="200"
              />
              <div className="text-center">
                <h2 className="text-lg font-inter font-semibold leading-7 tracking-tight text-gray-900">
                  Sakshi Shah
                </h2>
                <p className="text-xl font-bold font-montserrat leading-6 text-indigo-600">
                  AIR 5 NIPER 2020
                </p>
                {/* invisible Character */}
                <p className="text-base font-normal font-montserrat leading-6 text-black pb-2">
                  ‎
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-x-6 rounded-4xl shadow-md">
              <Image
                className="p-3"
                // src="\prachiach_1.webp"
                src={PS}
                alt="Prachi Shrivastav"
                height="200"
                width="200"
              />
              <div className="text-center">
                <h2 className="text-lg font-inter font-semibold leading-7 tracking-tight text-gray-900">
                  Prachi Shrivastav
                </h2>
                <p className="text-xl font-bold font-montserrat leading-6 text-indigo-600">
                  AIR 7 NIPER 2020
                </p>
                {/* invisible Character */}
                <p className="text-base font-normal font-montserrat leading-6 text-black pb-2">
                  ‎
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achieve;
