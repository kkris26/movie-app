import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contexts/globalContext";

const Footer = () => {
  const movieMenu = [
    { name: "Now Playing", link: "/now_playing" },
    { name: "Popular", link: "/popular" },
    { name: "Top Rated", link: "/top_rated" },
    { name: "Upcoming", link: "/upcoming" },
    { name: "Favorite", link: "/favorite" },
  ];

  const { genres } = useGlobalContext();
  return (
    <footer className="flex flex-col gap-10 bg-base-200">
      <section className="footer max-w-7xl mx-auto sm:footer-horizontal pt-15 text-base-content">
        <aside>
          <Link to={"/"} className="text-4xl">
            MovoRa
          </Link>
          <p className="w-100">
            Explore trending titles, discover hidden gems by genre, and stay
            updated with what’s now playing, upcoming, or top rated — all in one
            place. Movora is your personalized home for cinematic discovery.
          </p>
        </aside>
        <nav>
          {/* <h6 className="footer-title">Category</h6> */}
          {movieMenu.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-base-content/90 hover:underline underline-offset-6 flex items-center gap-4 justify-between hover:text-base-content"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <nav className="w-120">
          {/* <h6 className="footer-title">Genre</h6> */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-1 w-full">
            {genres.map((item) => (
              <Link
                key={item.id}
                to={"genre/" + item.id}
                className="text-base-content/90 hover:underline underline-offset-6 items-center hover:text-base-content"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        {/* <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav> */}
      </section>
      <section className="footer border-t border-base-content/2 sm:footer-horizontal footer-center text-base-content p-4">
        <aside>
          <p>
            &copy; {new Date().getFullYear()} - All rights reserved. Made with{" "}
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
        </aside>
      </section>
    </footer>
  );
};

export default Footer;
