import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container items-center mx-auto">
      <footer className="text-gray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg rounded-t-none bg-gradient-to-r from-blue-100  to-pink-100 border">
        <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
          <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center text-center pb-4">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-pink-600"></div>
              <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-500 lg:text-x lg:mr-8">
                {" "}
                Druashley{" "}
              </h2>
            </div>
          </a>
          <nav className="flex flex-wrap items-center justify-start text-base ">
            <ul className="items-center list-none  inline-flex ml-12  md:ml-24">
              <Link to="/projects">
                <div className="hover:text-blue-700 hover:underline px-4 py-1 mr-1 text-base text-black transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">
                  Projects
                </div>
              </Link>
              <Link to="/journal">
                <div className="hover:text-pink-700  hover:underline px-4 py-1 mr-1 text-base text-black transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">
                  Journal
                </div>
              </Link>
              <Link to="/resume">
                <div className="hover:text-blue-700 hover:underline px-4 py-1 mr-1 text-base text-black transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">
                  Resume
                </div>
              </Link>
              <Link to="/contact">
                <div className="hover:text-pink-700  hover:underline px-4 py-1 mr-1 text-base text-black transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">
                  Contact
                </div>
              </Link>
            </ul>
          </nav>
          <span className="inline-flex justify-center mt-2 mr-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              className="ml-3 text-blue-500 hover:text-black"
              href="https://twitter.com/dru_ashley"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-blue-500 hover:text-black"
              href="https://www.instagram.com/dru_ashley/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-blue-500 hover:text-black italic"
              href="https://github.com/Druashley"
              target="_blank"
              rel="noreferrer"
            >
              GIT
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
