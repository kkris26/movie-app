import React from "react";

const MovieListWrapper = ({ children, customClass }) => {
  return (
    <div className={`flex flex-col  gap-4 overflow-hidden  ${customClass} `}>
      {children}
    </div>
  );
};

export default MovieListWrapper;
