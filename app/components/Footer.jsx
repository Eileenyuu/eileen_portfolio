import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.ailin_logo_dark : assets.ailin_logo}
          alt="logo"
          className="w-36 p-3 mx-auto"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail_icon"
            className="w-6"
          />
          axy483@student.bham.ac.uk
        </div>
      </div>

      <div
        className="text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Ailin Yu. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              traget="_blank"
              href="https://www.linkedin.com/in/ailin-yu-b9938333b/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a traget="_blank" href="https://github.com/Eileenyuu">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
