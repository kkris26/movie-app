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
    <footer className="flex flex-col gap-6 md:gap-10 bg-base-200 px-4 lg:px-0 ">
      <section className="z-1 footer gap-6 flex flex-col md:flex-row justify-between max-w-7xl mx-auto sm:footer-horizontal pt-10 md:pt-13 lg:pt-15 text-base-content">
        <aside className="w-full md:w-70 lg:w-100">
          <Link to={"/"} className="text-3xl md:text-4xl">
            MovoRa
          </Link>
          <p className="text-xs lg:text-sm">
            Explore trending titles, discover hidden gems by genre, and stay
            updated with what’s now playing, upcoming, or top rated — all in one
            place. Movora is your personalized home for cinematic discovery.
          </p>
        </aside>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-1 md:gap-x-4 lg:gap-x-20 text-xs lg:text-sm">
          {movieMenu.map((item, index) => (
            <Link
              key={index}
              to={"category" + item.link}
              className="text-base-content/90 hover:underline underline-offset-6 flex items-center gap-4 justify-between hover:text-base-content"
            >
              {item.name}
            </Link>
          ))}
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
      </section>
      <section className="z-1 footer border-t border-base-content/2 sm:footer-horizontal footer-center text-base-content p-4">
        <aside>
          <p className="text-xs md:text-sm">
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
