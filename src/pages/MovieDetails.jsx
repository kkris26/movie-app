import React from "react";

import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  return (
    <div className="h-screen flex items-center flex-col gap-5 justify-center">
      <h1>ID = {id}</h1>
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
    </div>
  );
};

export default MovieDetails;
