import React from "react";

export default function ErrorNotice(props) {
  return (
    <div className=" border-2 bg-red-400 p-4 shadow-2xl rounded-lg my-4 flex justify-between items-center">
      <span>{props.message}</span>
      <button
        className="bg-red-700 py-2 px-4 rounded-full text-white"
        onClick={props.clearError}
      >
        X
      </button>
    </div>
  );
}
