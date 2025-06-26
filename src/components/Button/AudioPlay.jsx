import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const AudioPlay = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [first, setFirst] = useState(true);
  const audioRef = useRef();

  const handlePlay = () => {
    audioRef.current?.play();
    setIsPlay(true);
    setFirst(false);
  };
  const handlePause = () => {
    audioRef.current?.pause();
    setIsPlay(false);
  };

  //   window.onload = () => {
  //     setFirst(true);
  //   };
  return (
    <>
      <div
        className={`fixed h-dvh overflow-hidden ${
          first ? "opacity-100 z-999" : "opacity-0 z-0"
        } transition-all duration-800 inset-0 bg-base-200 flex items-center justify-start max-w-7xl mx-auto lg:px-0 px-4`}
      >
        <div className="z-1  flex flex-col gap-4 md:gap-5 lg:gap-6 md:w-110 lg:w-130">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-start">Welcome to Movora</h1>
          <p className="text-start text-sm md:text-md">
            Movora lets you browse trending, upcoming, and top-rated films by
            genre. Explore now and never miss a great movie again.
          </p>
          <button
            className="btn btn-lg btn-outline border-white hover:bg-white hover:text-black rounded-none w-max"
            onClick={handlePlay}
          >
            Explore Movies
          </button>
        </div>
        <img
          src="/cinema-bg.jpeg"
          className="inset-0 fixed h-screen w-full object-cover"
        />
        <div className="fixed inset-0 bg-black/30"></div>
      </div>

      <div className="fixed bottom-4 left-4 z-2">
        <audio ref={audioRef} preload="auto">
          <source src="/backsound-music2.mp3" type="audio/mpeg" />
          <source src="audio-file.ogg" type="audio/ogg" />
        </audio>
        {isPlay ? (
          <button className="btn" onClick={handlePause}>
            <FaPause />
          </button>
        ) : (
          <button className="btn" onClick={handlePlay}>
            <FaPlay />
          </button>
        )}
      </div>
    </>
  );
};

export default AudioPlay;
