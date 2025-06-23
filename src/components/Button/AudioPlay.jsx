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
        className={`fixed max-h-screen overflow-hidden ${
          first ? "opacity-100 z-3" : "opacity-0 z-0"
        } transition-all duration-800 inset-0 bg-base-200 flex items-center justify-center`}
       >
        <div className="z-1  flex flex-col gap-4 items-center">
          <h1 className="text-6xl">Welcome to Movora</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            nihil.
          </p>
          <button className="btn btn-outline w-max" onClick={handlePlay}>
            Let's Go
          </button>
        </div>
        <img
          src={
            import.meta.env.VITE_IMAGE_PATH_ORIGINAL +
            "/sItIskd5xpiE64bBWYwZintkGf3.jpg"
          }
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
