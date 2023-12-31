import React from "react";
import Link from "next/link";
import "../styles/globals.css";
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

function Contactbar() {
  return (
    <div className="contact sticky md:left-0 md:top-0 md:w-full md:z-40 lg:left-0 lg:top-0 lg:w-full lg:z-40">
      <div className="hidden md:flex md:p-4 md:text-black md:space-x-7 md:justify-center lg:flex lg:px-4 lg:py-2 lg:text-black lg:space-x-7 lg:justify-end lg:mr-24">
        <ul className="md:flex md:space-x-2 lg:flex lg:space-x-7">
          <li>
            <div className="flex space-x-3">
              <span className="mt-1">
                <Link
                  href="https://goo.gl/maps/C89WgW6thMya2sVy8"
                  target="_blank"
                >
                  <FaMapMarkerAlt />
                </Link>
              </span>
              <Link
                href="https://goo.gl/maps/C89WgW6thMya2sVy8"
                target="_blank"
              >
                <span>Dadar, Mumbai-14</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex space-x-3">
              <span className="mt-1">
                <Link href="mailto:pharmacad.india@gmail.com" target="_blank">
                  <FaRegEnvelope />
                </Link>
              </span>
              <Link href="mailto:pharmacad.india@gmail.com" target="_blank">
                <span>pharmacad.india@gmail.com</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex space-x-3">
              <span className="mt-1">
                <Link href="tel:+919967163961">
                  <FaPhoneAlt />
                </Link>
              </span>
              <Link href="tel:+919967163961">
                <span>(+91) 9967 163 961</span>
              </Link>
            </div>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li className="mt-1">
            <a href="https://m.facebook.com/pharmacad/" target="_blank">
              {" "}
              <FaFacebookF />
            </a>
          </li>
          <li className="mt-1">
            <a
              href="https://www.linkedin.com/company/pharmacad"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="mt-1">
            <a href="https://youtube.com/@Pharmacad" target="_blank">
              <FaYoutube />
            </a>
          </li>
          <li className="mt-1">
            <a
              href="https://www.instagram.com/pharmacad_gpat_niper_mba/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="mt-1">
            <a
              href="https://play.google.com/store/apps/details?id=co.loki.pharmac"
              target="_blank"
            >
              <FaGooglePlay />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contactbar;
