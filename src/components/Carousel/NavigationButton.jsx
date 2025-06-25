import React from "react";

const NavigationButton = ({ children, action, ref }) => {
  return (
    <button
      className="btn text-white z-9"
      onClick={() =>
        action === "next" ? ref.current?.slideNext() : ref.current?.slidePrev()
      }
    >
      {children}
    </button>
  );
};

export default NavigationButton;
