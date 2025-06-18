import React, { useState } from "react";

const HomePage = () => {
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDM5N2QxZDhhOGQ5NjRlMjhkOThkMDEwZDllNTExMyIsIm5iZiI6MTc1MDIwNTQwMi4zMzUsInN1YiI6IjY4NTIwM2RhY2YwYzJlMWFhN2ZiNTAzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tTHhnvqDjP9mPgplhU88JkV4a9g9a2sKHBlUGmc4JuM",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  getMovie();
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>Hallo !</h1>
    </div>
  );
};

export default HomePage;
