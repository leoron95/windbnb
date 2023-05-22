import React from "react";

export const SearchIcon = ({ color }) => {
  return (
    <svg
      fill="none"
      stroke={color}
      strokeWidth="3"
      className="w-5 h-5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      ></path>
    </svg>
  );
};

export const PinIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000"
      className="h-7 w-7"
      viewBox="-2 -2 24 24"
    >
      <path
        fill="#4F4F4F"
        fillRule="evenodd"
        stroke="none"
        d="M7 9.219a2 2 0 1 1-.001-3.999A2 2 0 0 1 7 9.22M7 0a7 7 0 0 0-7 7c0 3.866 7 13 7 13s7-9.134 7-13a7 7 0 0 0-7-7"
      />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      fill="none"
      stroke="#333333"
      className="w-5 h-5"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
};

export const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="#EB5757"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
      clipRule="evenodd"
    />
  </svg>
);
