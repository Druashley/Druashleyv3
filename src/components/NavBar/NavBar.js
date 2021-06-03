import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

const NavBar = () => {
  return (
    <div>
      <div className="container items-center mx-auto ">
        <div className="text-gray-700 transition duration-500 ease-in-out transform bg-gradient-to-r from-blue-100  to-pink-100 border rounded-lg shadow backdrop-blur-md">
          <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
            <nav className="flex flex-wrap items-center justify-start text-base ">
              <ul className="items-center list-none  inline-flex  md:ml-24">
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
            <Link
              to="/"
              className="justify-center focus:outline-none md:ml-auto md:mr-24"
            >
              <div className="inline-flex items-center pt-4 md:py-0 ">
                <div className="w-2 h-2 p-2 rounded-full bg-gradient-to-tr from-blue-500 to-pink-600"></div>
                <h2 className="block p-2 text-2xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blue-700 lg:text-x lg:mr-8">
                  Druashley
                </h2>
              </div>
            </Link>
            <AuthOptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
