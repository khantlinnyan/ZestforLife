import React from "react";

const Loader = () => {

  return (

    <div className="flex justify-center items-center h-full">

      <svg

        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"

        xmlns="http://www.w3.org/2000/svg"

        fill="none"

        viewBox="0 0 24 24"

      >

        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />

        <path

          className="opacity-75"

          fill="currentColor"

          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10 0l3 2.647A7.962 7.962 0 0120 12h-4a7.963 7.963 0 01-2 5.291z"

        ></path>

      </svg>

      <span>Loading...</span>

    </div>

  );

};

export default Loader;
