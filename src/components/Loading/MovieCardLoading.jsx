import React from "react";

const MovieCardLoading = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="skeleton h-95 w-full"></div>
      <div className="skeleton h-6 w-[90%]"></div>
      <div className="flex flex-wrap gap-2">
        <div className="skeleton h-4 w-1/4"></div>
        <div className="skeleton h-4 w-1/4"></div>
        <div className="skeleton h-4 w-1/4"></div>
      </div>
    </div>
  );
};

export default MovieCardLoading;
