import React from "react";

export default function JournalPost({ journalTitle, journalBody }) {
  return (
    <div className="container items-center px-5 py-12">
      <div className="flex flex-wrap ">
        <div className="w-full mx-auto my-4 bg-white border border-blue-400 rounded-lg shadow-xl lg:w-1/3">
          <div className="p-6">
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
              {journalTitle}
            </h2>
            <p className="mb-3 text-base leading-relaxed text-gray-700">
              {" "}
              {journalBody}{" "}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
