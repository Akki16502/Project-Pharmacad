"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import emailjs from "emailjs-com";

import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGooglePlay,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vvw57kk",
        "template_n8q4g1i",
        e.target,
        "lgscseDAAyHiDJEbz"
      )
      .then((result) => {
        // console.log(result.text);
        setIsError(false);
        // Optionally, you can show a success message to the user or redirect them to a thank you page
      })
      .catch((error) => {
        // console.error(error.text);
        setIsError(true);
        // Optionally, you can show an error message to the user
      });

    // Reset the form fields after submission
    setName("");
    setEmail("");
    setMobile("");
    setCollege("");
    setCourse("");
    setMessage("");
  };
  return (
    <div
      className="container mx-auto max-w-screen-xl px-4 pt-8 pb-16"
      id="contact"
    >
      <div className="text-black font-inter font-bold text-3xl">Contact Us</div>
      <div className="text-black font-inter text-xl my-2 pb-2 lg:text-black lg:font-inter lg:text-lg sm:text-[##4F4F4F] flex flex-row">
        {" "}
        <span className="px-2">━━ </span>{" "}
        <span> Reach out to us and start your Pharma Journey. </span>
      </div>
      <div className="max-w-7xl w-full pl-8 rounded shadow-lg ">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Side - Contact Form */}

          <div className="flex-1 mt-4 md:mx-6 mr-6">
            {/* Contact Form Content */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-900 font-medium mb-1"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-900 font-medium mb-1"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-gray-900 font-medium mb-1"
                >
                  Mobile<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="college"
                  className="block text-gray-900 font-medium mb-1"
                >
                  College Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="course"
                  className="block text-gray-900 font-medium mb-1"
                >
                  Course Selected<span className="text-red-500">*</span>
                </label>
                <select
                  id="course"
                  name="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="MBA Entrance Exam">MBA Entrance Exam</option>
                  <option value="M. Pharmacy Entrance Exam">
                    M. Pharmacy Entrance Exam
                  </option>
                  <option value="Abroad Counselling">Abroad Counselling</option>
                  <option value="Pharmacovigilance Certificate Course">
                    Pharmacovigilance Certificate Course
                  </option>
                  <option value="Intellectual Patent Rights Certificate Course">
                    Intellectual Patent Rights Certificate Course
                  </option>
                  <option value="MCQ Booklets">MCQ Booklets</option>
                  <option value="GPAT Test Series">GPAT Test Series</option>
                  <option value="GPAT Booster Course">
                    GPAT Booster Course
                  </option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-900 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full border-gray-300 border rounded px-3 py-2"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#3a47fb] text-white py-2 px-4 shadow-xl rounded mb-4"
              >
                Send Message
              </button>
              <div className="mb-4">
                {isError === true && (
                  <div>
                    <p className="text-gray-900 font-bold text-red-500">
                      Looks like there is an error! Don&apos;t worry, contact us
                      on mobile or email.
                    </p>
                  </div>
                )}
                {isError === false && (
                  <div>
                    <p className="text-gray-900 font-bold text-green-500">
                      We have received your submission. We will reach out to you
                      at the earliest.
                    </p>
                  </div>
                )}
              </div>
              <div className="mb-12"></div>
            </form>
          </div>
          <div></div>
          <div className=" bg-[#f2fff0] flex-1 -ml-8">
            {/* Map & Address Details Content */}
            <div className=" md:block mt-0">
              <iframe
                className="w-full h-200"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15087.756685276645!2d72.8477257!3d19.0224019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced9a50a502d%3A0x978269e11b52473d!2sPHARMACAD%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1694453095522!5m2!1sen!2sin"
                width="600"
                height="375"
                loading="lazy"
                title="Dadar Address Location"
              ></iframe>
            </div>
            <div className="text-black">
              <div className="flex items-center mx-6 mt-10">
                <ul className="list-none md:ml-10 mx-6">
                  <li>
                    <div className="flex space-x-3">
                      <span className="mt-1 pr-2">
                        <Link href="tel:+919967163961" aria-label="Phone">
                          <FaPhoneAlt />
                        </Link>
                      </span>
                      <Link href="tel:+919967163961" aria-label="Phone">
                        <span className="font-inter">(+91) 9967 163 961</span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex items-center mx-6 mt-4 mb-2">
                <ul className="list-none md:ml-10 mx-6">
                  <li>
                    {" "}
                    <div className="flex space-x-3">
                      <span className="mt-1 pr-2">
                        <Link
                          href="mailto:pharmacad.india@gmail.com"
                          target="_blank"
                          aria-label="Email"
                        >
                          <FaRegEnvelope />
                        </Link>
                      </span>
                      <Link
                        href="mailto:pharmacad.india@gmail.com"
                        target="_blank"
                        aria-label="Email"
                      >
                        <span className="font-inter">
                          pharmacad.india@gmail.com
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex items-center mx-6 mt-4 mb-2">
                <ul className="list-none md:ml-10 mx-6">
                  <li>
                    {" "}
                    <div className="flex space-x-3">
                      <span className="mt-1 pr-2">
                        <Link
                          href="https://goo.gl/maps/C89WgW6thMya2sVy8"
                          target="_blank"
                          aria-label="Location Dadar"
                        >
                          <FaMapMarkerAlt />
                        </Link>
                      </span>
                      <Link
                        href="https://goo.gl/maps/C89WgW6thMya2sVy8"
                        target="_blank"
                        aria-label="Location Dadar"
                      >
                        <span className="font-inter">
                          Shishu Vihar Mandal, High School, opp. King George,
                          near Ruia College, Matunga Central Railway Workshop,
                          Dadar East, Dadar, Mumbai, Maharashtra-400014
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center mx-6 mt-4 mb-6">
                <ul className="list-none md:ml-10 mx-6">
                  <li>
                    <div className="flex space-x-3">
                      <span className="mt-1 pr-2">
                        <Link
                          href="https://goo.gl/maps/hZm4UohLaAKekps27"
                          target="_blank"
                          aria-label="Location Thane"
                        >
                          <FaMapMarkerAlt />
                        </Link>
                      </span>{" "}
                      <Link
                        href="https://goo.gl/maps/hZm4UohLaAKekps27"
                        target="_blank"
                        aria-label="Location Thane"
                      >
                        <p className="font-inter">
                          CET King Classroom, Ground Floor and Basement, Thakur
                          Nivas, Next to TipTop Sweets Opp Thane West Station,
                          Maharashtra 400601.
                        </p>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
