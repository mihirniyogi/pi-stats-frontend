import { useEffect, useState } from "react";
import rpiImage from "./assets/rpi.webp";
import { FaServer } from "react-icons/fa";

const border = 0;
const serverOnline = 1;

function App() {
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
    // Entire screen
    <div className={`flex min-h-screen bg-background`}>
      {/* Entire screen with x-margins */}
      <div
        className={`flex flex-col min-h-full w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10
        ${border ? "border border-white" : ""}`}
      >
        {/* Icon + Title + Time */}
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
              className={`text-left text-white font-sans font-medium
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

        {/* Divider */}
        <div
          className={`border-t border-gray-400 
          mt-2
          sm:mt-3
          md:mt-4
          lg:mt-5`}
        />

        {/*  Icon + Status Circle + Text */}
        <div
          className={`flex flex-row 
            mt-8
            sm:mt-10
            md:mt-12
            lg:mt-14 
          ${border ? "border border-green-600" : ""}`}
        >
          {/* icon */}
          <FaServer
            className={`text-gray-400
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            ${border ? "border border-orange-500" : ""}`}
          />

          {/* status circle + text */}
          <div
            className={`flex flex-row items-center 
              ml-2 space-x-2
              sm:ml-3
              md:ml-4 
              lg:ml-5 
              ${border ? "border border-orange-500" : ""}`}
          >
            {/* circle */}
            <span
              className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 
                rounded-full 
                ${serverOnline ? "bg-green-500" : "bg-red-500"}`}
            ></span>

            {/* text */}
            <p
              className={`text-gray-400 font-sans 
              text-md sm:text-lg md:text-xl lg:text-2xl`}
            >
              {serverOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
