import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  };

  const getGenre = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_GENRE_LIST, options);
      const data = await response.json();
      console.log(data);
      setGenre(data.genres);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovie = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_MOVIE_LIST, options);
      const data = await response.json();
      setMovie(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getGenre();
    getMovie();
  }, []);
  console.log(movie);
  console.log(genre);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="grid grid-cols-5 gap-3">
        {movie.map((item) => (
          <div className="flex flex-col" key={item.id}>
            <img
              src={import.meta.env.VITE_IMAGE_PATH + item.poster_path}
              alt={item.title}
            />
            <img
              src={import.meta.env.VITE_IMAGE_PATH + item.backdrop_path}
              alt={item.title}
            />
            <h2>{item.title}</h2>
            <p>{item.id}</p>
            <div>
              <h2>Genre</h2>
              <ul className="flex gap-2 flex-wrap">
                {item.genre_ids.map((genreId) => (
                  <li className="bg-base-300 p-1 px-2 rounded-md">
                    {genre.map((item) => item.id === genreId && item.name)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
