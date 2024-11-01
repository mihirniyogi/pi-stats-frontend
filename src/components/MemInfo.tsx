import { FaMemory } from "react-icons/fa6";
import Card from "./Common/Card";
import ProgressBar from "./Common/ProgressBar";

const MemInfo = () => {
  const border = 0;

  return (
    <div
      className={`${border ? "border border-orange-400" : ""}
          `}
    >
      <h2
        className={`flex flex-row items-center text-white font-sans font-bold
            text-md
            sm:text-lg
            md:text-xl
            lg:text-2xl
            `}
      >
        <FaMemory className={`text-jadegreen mr-2`} />
        <span>RAM</span>
      </h2>

      <Card flag="30s ago">
        {/* Total (in GB) */}
        <section
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <span>{"Total: "}</span>
          <span className={`font-extralight`}>{"1.93 GB"}</span>
        </section>

        {/* Used (in GB) */}
        <section
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <span>Used: </span>
          <span className={`font-extralight`}>{"0.62 GB"}</span>
        </section>

        {/* Available (in GB) */}
        <section
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <span>Available: </span>
          <span className={`font-extralight`}>{"1.21 GB"}</span>
        </section>

        {/* Percentage */}
        <section
          className={`mt-2
            text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <ProgressBar percentage={37.2} />
        </section>
      </Card>
    </div>
  );
};

export default MemInfo;
