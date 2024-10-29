import Header from "./components/Header";
import Divider from "./components/Divider";
// import Card from "./components/Card";
// import { FaServer } from "react-icons/fa";

const border = 0;

function App() {
  return (
    // Entire screen
    <div className={`flex min-h-screen bg-background`}>
      {/* Entire screen with x-margins */}
      <div
        className={`flex flex-col min-h-full w-full 
          mx-4 
          sm:mx-6 
          md:mx-8 
          lg:mx-10
        ${border ? "border border-white" : ""}`}
      >
        <Header />

        <Divider />

      </div>
    </div>
  );
}

export default App;

/**


<div
          className={`flex flex-row 
            mt-8
            sm:mt-10
            md:mt-12
            lg:mt-14 
          ${border ? "border border-green-600" : ""}`}
        >
          <FaServer
            className={`text-gray-400
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            ${border ? "border border-orange-500" : ""}`}
          />

          <div
            className={`flex flex-row items-center 
              ml-2 space-x-2
              sm:ml-3
              md:ml-4 
              lg:ml-5 
              ${border ? "border border-orange-500" : ""}`}
          >
            <span
              className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 
                rounded-full 
                ${serverOnline ? "bg-green-500" : "bg-red-500"}`}
            ></span>

            <p
              className={`text-gray-400 font-sans 
              text-md sm:text-lg md:text-xl lg:text-2xl`}
            >
              {serverOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>

 */
