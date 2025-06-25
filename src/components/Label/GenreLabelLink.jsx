import React from "react";
import ListLabel from "./ListLabel";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contexts/globalContext";

const GenreLabelLink = ({ genreId }) => {
  const { genres } = useGlobalContext();
  console.log(genres, genreId);

  return (
    <ListLabel>
      <Link
        className="hover:underline underline-offset-2"
        to={"/genre/" + genreId}
      >
        {genres.length > 0 && genres.find((item) => item.id === genreId).name}
      </Link>
    </ListLabel>
  );
};

export default GenreLabelLink;
