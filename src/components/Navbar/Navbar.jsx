import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAPIData } from "../../services/getAPIService";
import { GoArrowUpRight } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdHeart } from "react-icons/io";
import { useGlobalContext } from "../../contexts/globalContext";
import { IoCloseOutline } from "react-icons/io5";
import ListLabel from "../Label/ListLabel";
import DetailsHover from "../Hover/DetailsHover";

const Navbar = (pathname) => {
  const [isTop, setIsTop] = useState(true);
  const [loading, setLoading] = useState({
    searchMovie: true,
  });
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [bgNavbar, setBgNavbar] = useState(true);
  const { favorite } = useGlobalContext();
  const menuRef = useRef();
  const inputSearchRef = useRef();
  const closeSearchRef = useRef();
  const modalSearchRef = useRef();

  const { genres } = useGlobalContext();

  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      return setIsTop(false);
    }
    setIsTop(true);
  });

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
  const handleCloseSearchModal = () => {
    modalSearchRef.current.close();
  };
  useEffect(() => {
    if (searchQuery == "") {
      setLoading({ searchMovie: true });
      return;
    }
    setLoading({ searchMovie: true });
    const searchMovieTO = setTimeout(() => {
      getAPIData({
        key: "searchMovie",
        apiUrl: import.meta.env.VITE_SEARCH_MOVIES + searchQuery,
        setter: setSearchMovies,
        setterLoading: setLoading,
        type: "search",
      });
    }, 700);
    return () => {
      clearTimeout(searchMovieTO);
    };
  }, [searchQuery]);

  const movieMenu = [
    { name: "Now Playing", link: "/now_playing" },
    { name: "Popular", link: "/popular" },
    { name: "Top Rated", link: "/top_rated" },
    { name: "Upcoming", link: "/upcoming" },
    { name: "Favorite", link: "/favorite" },
  ];

  const currentPathname = pathname.pathname;
  useEffect(() => {
    const timeout = setTimeout(() => {
      currentPathname === "/" || currentPathname.startsWith("/movie")
        ? setBgNavbar(true)
        : setBgNavbar(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentPathname]);

  return (
    <>
      {/* modal */}
      <dialog ref={modalSearchRef} id="my_modal_2" className="modal z-9">
        <div className="modal-box p-0 pb-4">
          <div className="flex items-center gap-3 border-b-1 border-base-content/5 px-4 py-2">
            <label htmlFor="search-movie">
              <FiSearch />
            </label>

            <input
              ref={inputSearchRef}
              type="text"
              id="search-movie"
              placeholder="Search Movie"
              className="input input-ghost focus:outline-0 w-full input-sm p-0 outline-0"
              onChange={(e) => handleOnChangeSearch(e)}
            />
            <button
              ref={closeSearchRef}
              onClick={handleCloseSearchModal}
              className="btn btn-xs"
            >
              Esc
            </button>
          </div>
          {loading.searchMovie ? (
            <div className="h-50 flex items-center justify-center">
              <p className="text-base-content/60 text-sm">
                {searchQuery ? "Loading ..." : "Start typing to search"}
              </p>
            </div>
          ) : (
            <div className="">
              <p className="text-xs pt-2 border-b border-base-content/5 bg-base-content/3 px-4  pb-2">
                Search Results for "{searchQuery}"
              </p>
              {searchMovies.length > 0 ? (
                <ul className="h-100 overflow-auto px-4 ">
                  {searchMovies.map(
                    (item) =>
                      item.poster_path && (
                        <Link
                          onClick={handleCloseSearchModal}
                          to={"/movie/" + item.id}
                          key={item.id}
                          className="flex items-center w-full border-b  border-base-content/5  hover:bg-gray-500/10 gap-3 py-2"
                        >
                          <img
                            src={
                              import.meta.env.VITE_IMAGE_PATH + item.poster_path
                            }
                            className="w-10 min-w-10 min-h-12 bg-base-content rounded-xs"
                            alt={item.title}
                          />
                          <div className="gap-0 flex flex-col">
                            <p
                              className="text-sm line-clamp-1 text-base-content/90"
                              key={item.id}
                            >
                              {item.title}
                            </p>
                            <p className="line-clamp-1 text-xs text-base-content/80">
                              {item.overview}
                            </p>
                          </div>
                        </Link>
                      )
                  )}
                </ul>
              ) : (
                <div className="h-50 flex items-center justify-center">
                  <p className="text-base-content/60 text-sm">Not Found</p>
                </div>
              )}
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop ">
          <button>close</button>
        </form>
      </dialog>
      {/* modal */}
      <div className="drawer z-10">
        <input
          ref={menuRef}
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div
          className={`drawer-content transition-all duration-300 ease-in-out px-4 lg:px-0   ${
            isTop
              ? ` ${
                  bgNavbar
                    ? "text-white bg-transparent"
                    : "text-base-content shadow-md"
                }`
              : "bg-base-100  shadow-md"
          } fixed w-full flex justify-center`}
        >
          <div className={` navbar max-w-7xl px-0`}>
            <div className="navbar-start">
              <label
                htmlFor="my-drawer"
                aria-label="open sidebar"
                className={`text-xl cursor-pointer  hover:${
                  bgNavbar && isTop ? "text-white/80" : "text-base-content/80"
                } focus:outline-0`}
              >
                <RxHamburgerMenu />
              </label>
            </div>
            <div className="navbar-center">
              <Link to="/" className=" text-xl">
                MovoRa
              </Link>
            </div>
            <div className="navbar-end items-center gap-3">
              <button
                className={`text-xl relative cursor-pointer group hover:${
                  bgNavbar && isTop ? "text-white/80" : "text-base-content/80"
                } focus:outline-0`}
                onClick={handleOpenSearchModal}
              >
                <FiSearch />
                <DetailsHover>Search</DetailsHover>
              </button>
              <Link className="text-xl group relative " to={"/favorite"}>
                <IoMdHeart
                  className={` transition-all duration-500 ${
                    bgNavbar && isTop ? "text-white" : " text-red-400"
                  }`}
                />
                <DetailsHover>Favorite</DetailsHover>
                {favorite.length > 0 && (
                  <p className="text-[8px] text-white w-max leading-1.5 p-[3px] rounded-full bg-primary flex items-center justify-center absolute top-[-3px] left-[18px]">
                    {favorite.length}
                  </p>
                )}
              </Link>
            </div>
          </div>
        </div>
        <div className="drawer-side m-0">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-base-200 text-base-content h-full w-80 p-0 gap-2 flex-col justify-between flex">
            <div className="flex flex-col gap-5 pt-4 px-6">
              <div className="flex justify-between items-center  text-3xl border-b border-base-content/10 pb-4">
                <h1 to="/">MovoRa</h1>
                <IoCloseOutline
                  className="cursor-pointer text-2xl"
                  onClick={handleCloseMenu}
                />
              </div>
              {/* <h1 className="text-2xl">Category</h1> */}
              <div className=" flex flex-col gap-5 text-lg font-light">
                {movieMenu.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={handleCloseMenu}
                    className="text-base-content/90 hover:underline underline-offset-6 flex items-center gap-4 justify-between hover:text-base-content"
                  >
                    {item.name}
                    <GoArrowUpRight />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4 px-6">
                <h1 className="text-lg border-b border-base-content/10 py-2">
                  Movie Genre
                </h1>
                <div className=" flex flex-wrap gap-x-4 gap-y-2 text-md ">
                  {genres.map((item) => (
                    <Link
                      key={item.id}
                      to={"genre/" + item.id}
                      onClick={handleCloseMenu}
                      className="text-base-content/90 hover:underline underline-offset-3 text-sm items-center hover:text-base-content"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-10 px-6 py-4 text-xs bg-base-300/80">
                {" "}
                <p>
                  &copy; {new Date().getFullYear()} - MovoRa. Made with{" "}
                  <span className="text-red-400">❤️</span> by{" "}
                  <a
                    href="https://www.krisnu.com"
                    target="blank"
                    className="underline underline-offset-2"
                  >
                    {" "}
                    Krisnu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
