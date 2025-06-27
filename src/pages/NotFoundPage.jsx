import React from "react";
import { Link } from "react-router-dom";
import ContentLayouts from "../layouts/ContentLayouts";

const NotFoundPage = () => {
  return (
    <ContentLayouts
      customClass={"flex flex-col justify-center items-center"}
      type="no-hero"
    >
      <h1 className=" z-2 text-4xl sm:text-4xl md:text-6xl font-bold mb-4">
        404 Not Found
      </h1>
      <p className="  z-2 text-sm sm:text-lg  mb-4 max-w-md text-center font-light">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to={"/"}
        className=" z-2 underline underline-offset-4 text-sm md:text-lg"
      >
        Go Back Home
      </Link>
    </ContentLayouts>
  );
};

export default NotFoundPage;
