import React from "react";

const DangerToast = ({ children, errorItem }) => {
  return (
    <div
      role="alert"
      className={`alert alert-error bg-red-400 p-2 md:p-3 gap-1 md:gap-4 text-[11px] leading-tight md:leading-normal md:text-xs flex w-max transition-all duration-300 text-white max-w-80 md:max-w-100`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{children}</span>
    </div>
  );
};

export default DangerToast;
