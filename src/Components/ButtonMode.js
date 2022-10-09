import React from "react";

const ButtonMode = (props) => {
  return (
    <>
      <button class=" inline-flex items-center bg-gray-100  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={props.click}>
      Color Change
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
    </>
  );
};

export default ButtonMode;
