import { useEffect, useState } from "react";
import rpiImage from "../assets/rpi.webp";

const Header = () => {
  const border = 0;

  const [currentTime, setCurrentTime] = useState<string>("");

  const updateTime = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    setCurrentTime(formattedTime);
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(() => updateTime(), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div
      className={`flex flex-row items-center justify-start
            mt-4 space-x-2 h-20
            sm:mt-6 sm:space-x-3 sm:h-22
            md:mt-8 md:space-x-4 md:h-24
            lg:mt-10 lg:space-x-5 lg:h-26
          ${border ? "border border-red-600" : ""}`}
    >
      {/* icon */}
      <img
        src={rpiImage}
        alt="Server Icon"
        className={`w-auto h-full max-h-26
            ${border ? "border border-blue-600" : ""}`}
      />

      {/* title */}
      <div
        className={`flex flex-row h-full items-center
                        ${border ? "border border-blue-600" : ""}`}
      >
        <h1
          className={`text-left text-white font-sans font-light
              text-xl       
              sm:text-2xl  
              md:text-3xl 
              lg:text-4xl 
              `}
        >
          Mihir's Home Server
        </h1>
      </div>

      {/* time */}
      <div
        className={`flex-row h-full items-center flex-1 justify-end hidden sm:flex
                        ${border ? "border border-blue-600" : ""}`}
      >
        <h1
          className={`text-left text-white font-sans font-light
              text-xl       
              sm:text-2xl  
              md:text-3xl 
              lg:text-4xl 
              `}
        >
          {currentTime}
        </h1>
      </div>
    </div>
  );
};

export default Header;
