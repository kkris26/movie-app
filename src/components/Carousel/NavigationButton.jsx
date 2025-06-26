import { useState } from "react";

const NavigationButton = ({ children, action, ref, setCount }) => {
  return (
    <>
      <button
        className="btn w-max btn-xs md:btn-sm md:text-lg text-xs text-base-content z-4 p-2 md:p-3"
        onClick={() => {
          action === "next"
            ? ref.current?.slideNext()
            : ref.current?.slidePrev();
        }}
      >
        {children}
      </button>
    </>
  );
};

export default NavigationButton;
