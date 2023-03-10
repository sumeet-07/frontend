import React from "react";
import { FaEnvelope, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mx-[5%] rounded-md">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <h1 className="text-4xl p-4">Project Diary</h1>
        <ul className="flex space-x-4 mb-4">
          <li>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500"
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500"
            >
              <FaTwitter size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500"
            >
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500"
            >
              <FaEnvelope size={24} />
            </a>
          </li>
        </ul>
        <p className="text-sm">
          &copy; 2023 Project Diary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
