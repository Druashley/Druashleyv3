import React from "react";
import Journal from "../components/Journal/Journal";

export default function JournalPage() {
  return (
    <div>
      <section className="text-gray-700 ">
        <div className="container flex flex-col items-center px-5 py-8 mx-auto">
          <div className="flex flex-col w-full mb-2 text-left ">
            <div className="w-full mx-auto lg:w-1/2">
              <h1 className="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                {" "}
                A journal to document my coding journey{" "}
              </h1>
              <h2 className="mx-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font">
                {" "}
                Check out my thinking behind what I am working on.{" "}
              </h2>
              <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 ">
                {" "}
                The more I code the more I learn. I am always working on a few
                different projects, and this journal will help showcase what I
                am actually working on at any given moment.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Journal />
    </div>
  );
}
