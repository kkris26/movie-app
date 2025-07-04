import React from "react";

const SuccessToast = ({ children, itemFav }) => {
  return (
    <div
      role="alert"
      className={`alert bg-succes p-2 md:p-3 gap-1 md:gap-4 text-[11px] leading-tight md:leading-normal md:text-xs alert-success flex w-max transition-all duration-300 text-white max-w-80 md:max-w-100`}
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{children}</span>
    </div>
  );
};

export default SuccessToast;
