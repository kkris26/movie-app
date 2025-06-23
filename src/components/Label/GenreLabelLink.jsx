import React from "react";
import ListLabel from "./ListLabel";
import { Link } from "react-router-dom";

const GenreLabelLink = ({ genreId, genre }) => {
  return (
    <ListLabel>
      <Link to={"/genre/" + genreId}>
        {genre.length > 0 &&
          genre.map((item) => item.id === genreId && item.name)}
      </Link>
    </ListLabel>
  );
};

export default GenreLabelLink;
