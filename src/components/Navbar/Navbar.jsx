import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAPIData } from "../../services/getAPIService";
import { GoArrowUpRight } from "react-icons/go";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState({
    searchMovie: true,
  });
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    getGenre();
  }, []);

  const menuRef = useRef();
  const inputSearchRef = useRef();
  const closeSearchRef = useRef();
  const modalSearchRef = useRef();

  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      return setIsTop(false);
    }
    setIsTop(true);
  });
  const getGenre = () => {
    getAPIData({
      key: "genre",
      apiUrl: import.meta.env.VITE_GENRE_LIST,
      setter: setGenres,
      text: "Fetch Genre",
      resultData: "genres",
      setterLoading: setLoading,
    });
  };

  const handleCloseMenu = () => {
    menuRef.current.checked = false;
  };
  const handleOnChangeSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleOpenSearchModal = () => {
    modalSearchRef.current.showModal();
    setTimeout(() => {
      inputSearchRef.current.focus();
    }, 20);
  };
  useEffect(() => {
    if (searchQuery == "") {
      setLoading({ searchMovie: true });
      return;
    }
    const searchMovie = setTimeout(() => {
      setLoading({ searchMovie: true });
      getAPIData({
        key: "searchMovie",
        apiUrl: import.meta.env.VITE_SEARCH_MOVIES + searchQuery,
        setter: setSearchMovies,
        setterLoading: setLoading,
        type: "search",
      });
      console.log(searchQuery);
    }, 1000);
    return () => {
      clearTimeout(searchMovie);
    };
  }, [searchQuery]);

  const movieMenu = [
    { name: "Now Playing", link: "/now_playing" },
    { name: "Popular", link: "/popular" },
    { name: "Top Rated", link: "/top_rated" },
    { name: "Upcoming", link: "/upcoming" },
  ];

  return (
    <>
      {/* modal */}
      <dialog ref={modalSearchRef} id="my_modal_2" className="modal">
        <div className="modal-box p-0 pb-4">
          <div className="flex items-center gap-3 border-b-1 border-white/10 px-4 py-2">
            <label htmlFor="search-movie">
              <FiSearch />
            </label>

            <input
              ref={inputSearchRef}
              type="text"
              id="search-movie"
              placeholder="Seacrh Movie"
              className="input input-ghost focus:outline-0 w-full input-sm p-0 outline-0"
              onChange={(e) => handleOnChangeSearch(e)}
            />
            <button
              ref={closeSearchRef}
              onClick={() => document.getElementById("my_modal_2").close()}
              className="btn btn-xs"
            >
              Esc
            </button>
          </div>
          {loading.searchMovie || !searchQuery ? (
            <div className="h-30 flex items-center justify-center">
              <p className="text-gray-200/70">
                {searchQuery ? "Loading ..." : "Start Searching"}
              </p>
            </div>
          ) : (
            <div className="h-40 overflow-auto p-4">
              <p>Search Results for "{searchQuery}"</p>
              <ul>
                {searchMovies.length > 0 ? (
                  searchMovies.map((item) => (
                    <li
                      className="border-b border-white/10 py-2 text-white/50"
                      key={item.id}
                    >
                      {item.title}
                    </li>
                  ))
                ) : (
                  <li>Not Found</li>
                )}
              </ul>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop ">
          <button>close</button>
        </form>
      </dialog>
      {/* modal */}
      <div className="drawer z-3">
        <input
          ref={menuRef}
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
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
              <Link to="/" className=" text-xl">
                MovoRa
              </Link>
            </div>
            <div className="navbar-end">
              <button
                className="btn btn-ghost btn-circle"
                onClick={handleOpenSearchModal}
              >
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
          <div className="menu bg-base-200 text-base-content h-full w-80 p-6 gap-2 flex-col justify-between flex">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl">Category</h1>
              <div className=" flex flex-col gap-4 text-2xl font-light">
                {movieMenu.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={handleCloseMenu}
                    className="text-base-content/80 underline underline-offset-6 flex items-center gap-4 justify-between hover:text-base-content"
                  >
                    {item.name}
                    <GoArrowUpRight />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Movie Genre</h1>
              <div className=" flex flex-wrap gap-x-4 text-md ">
                {genres.map((item) => (
                  <Link
                    key={item.id}
                    to={"genre/" + item.id}
                    onClick={handleCloseMenu}
                    className="text-base-content/70 underline underline-offset-3 items-center hover:text-base-content"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
