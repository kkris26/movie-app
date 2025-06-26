import { useState } from "react";

const NavigationButton = ({ children, action, ref }) => {
  const [nextCount, setNextCount] = useState(10);
  const [prevCount, setPrevCount] = useState(10);

  const handleNextSlide = () => {
    setPrevCount((prev) => prev + 1);
    setNextCount((prev) => prev + 1);
  };
  const handlePrevSlide = () => {
    setPrevCount((prev) => prev - 1);
    setNextCount((prev) => prev - 1);
  };

  console.log(nextCount, prevCount);
  return (
    <>
      {action === "next" ? (
        <button
          disabled={nextCount == 10}
          className="btn btn-sm text-base-content z-9 px-3"
          onClick={() => {
            ref.current.slideNext(), handleNextSlide();
          }}
        >
          {children}
        </button>
      ) : (
        <button
          disabled={prevCount == 1}
          className="btn btn-sm text-base-content z-9 px-3"
          onClick={() => {
            ref.current?.slidePrev(), handlePrevSlide();
          }}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default NavigationButton;
