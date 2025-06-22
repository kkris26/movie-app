import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAPIData } from "../../services/getAPIService";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState();
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      return setIsTop(false);
    }
    setIsTop(true);
  });
  const getGenre = () => {
    getAPIData({
      key: "genre",
      apiUrl: import.meta.env.VITE_MOVIE_LLIST_BY_GENRE,
      setter: setGenres,
      text: "Fetch Genre",
      resultData: "genres",
      setterLoading: setLoading,
    });
  };
  useEffect(() => {
    getGenre();
  }, []);
  console.log(genres);
  console.log(loading);
  return (
    <div className="drawer z-3">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div
          className={`transition-all duration-300 ease-in-out navbar  ${
            isTop ? "bg-transparent text-white" : "bg-base-100"
          } mx-auto px-10 fixed w-full`}
        >
          <div className="navbar-start">
            <label
              htmlFor="my-drawer"
              aria-label="open sidebar"
              className="btn btn-square rounded-full btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="navbar-center">
            <Link to="/" className="btn btn-ghost text-xl">
              MovoRa
            </Link>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />{" "}
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />{" "}
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <h1 className="text-xl">Genre</h1>
          <ul>
            {genres.map((item) => (
              <li>
                <Link to={"genres/" + item.id}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
