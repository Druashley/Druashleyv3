import React from "react";
import code from "../../imgs/code.svg";

const Home = () => {
  return (
    <section className="text-gray-700 ">
      <div className="container flex flex-col items-center px-4 py-16 mx-auto md:flex-row lg:px-28">
        <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-10 md:pr-12 md:mb-0 ">
          <h1 className="mb-8 text-2xl font-bold text-left text-black ">
            Custom solutions for your unique{" "}
            <span className="italic text-blue-400">situation</span>
          </h1>
          <p className="max-w-lg">
            Hello, my name is Dru and I am a web devloper ready to assist your
            company's needs. No matter your current step in the development
            process, I can bring your{" "}
            <span className="italic text-blue-400">ideas</span> to life.
          </p>
          <div className="flex flex-col md:flex-row ">
            <div className="mt-12 md:ml-2 border py-4 px-4 rounded-lg shadow-xl flex md:flex-col border-blue-400">
              <p className="flex items-center mb-2 text-gray-600 ">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full text-blue-400">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </span>{" "}
                Custom Website Design
              </p>
              <p className="flex items-center mb-2 text-gray-600 ">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full text-blue-400">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </span>{" "}
                Database Integration
              </p>
              <p className="flex items-center mb-2 text-gray-600 ">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full text-blue-400">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </span>{" "}
                Mobile Friendly
              </p>
            </div>
            <div className="mt-12 md:ml-6 border py-4 px-4 rounded-lg shadow-xl flex md:flex-col border-blue-400 ">
              <p className="flex items-center mb-2 text-gray-600 ">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full text-blue-400">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </span>{" "}
                Creative Solutions
              </p>
              <p className="flex items-center mb-2 text-gray-600 ">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full text-blue-400">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </span>{" "}
                Exceptional Service
              </p>
              <p className="flex items-center mb-2 text-gray-600 ">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full text-blue-400">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </span>{" "}
                Social Media Integration
              </p>
            </div>
          </div>
        </div>
        <img className=" pt-4 md:pt-12 md:w-1/2" src={code} alt="Thinking" />
      </div>

      <div className="min-h-screen bg-gray-100">
        <div className="text-6xl mx-auto text-center pt-12">
          Recent Projects
        </div>
        <div className="container flex flex-col items-center px-4 pt-8  md:flex-row mx-auto ">
          <div className="container items-center px-5 py-12 lg:px-20 ">
            <div className="flex flex-wrap ">
              <div className="w-full  my-4 bg-white border rounded-lg shadow-xl">
                <div className="p-6">
                  <h2 className="mb-8 text-sm font-semibold tracking-widest text-black uppercase title-font">
                    {" "}
                    Currently I am redesigning my homepage
                  </h2>
                  <p className="mb-3 text-base leading-relaxed text-gray-500">
                    This is my third iteration of my homepage. It will include a
                    database for journal entries.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="container items-center px-5 py-12 lg:px-20 ">
            <div className="flex flex-wrap ">
              <div className="w-full  my-4 bg-white border rounded-lg shadow-xl">
                <div className="p-6">
                  <h2 className="mb-8 text-sm font-semibold tracking-widest text-black uppercase title-font">
                    {" "}
                    EMS Protcol App
                  </h2>
                  <p className="mb-3 text-base leading-relaxed text-gray-500">
                    Built from the ground up - This create, read, update, and
                    delete app was designed for EMS needs in mind.
                  </p>
                  <a
                    href="https://protocol-ems.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="hover:text-pink-600"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container items-center px-5 py-12 lg:px-20 ">
            <div className="flex flex-wrap ">
              <div className="w-full  my-4 bg-white border rounded-lg shadow-xl">
                <div className="p-6">
                  <h2 className="mb-8 text-sm font-semibold tracking-widest text-black uppercase title-font">
                    {" "}
                    Pat McAfee Soundboard
                  </h2>
                  <p className="mb-3 text-base leading-relaxed text-gray-500">
                    Fan made website for my favorite sports show. Beware that
                    some audio may be NSFW.
                  </p>
                  <a
                    href="https://druashley.github.io/PMI-Soundboard/"
                    rel="noreferrer"
                    target="_blank"
                    className="hover:text-pink-600"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container items-center px-5 py-12 lg:px-20 ">
            <div className="flex flex-wrap ">
              <div className="w-full  my-4 bg-white border rounded-lg shadow-xl">
                <div className="p-6">
                  <h2 className="mb-8 text-sm font-semibold tracking-widest text-black uppercase title-font">
                    {" "}
                    NBA Stats
                  </h2>
                  <p className="mb-3 text-base leading-relaxed text-gray-500">
                    On my Github you will find a NBA app I made to display
                    stats. I will be remaking this project sometime soon.
                  </p>
                  <a
                    href="https://github.com/Druashley/NBA-API"
                    rel="noreferrer"
                    target="_blank"
                    className="hover:text-pink-600"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
