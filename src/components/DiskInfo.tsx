import Card from "./Common/Card";
import ProgressBar from "./Common/ProgressBar";
import { FaSdCard } from "react-icons/fa6";

const DiskInfo = () => {
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
        <FaSdCard className={`text-jadegreen mr-2`} />
        <span>Disk</span>
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
          <span className={`font-extralight`}>{"30.31 GB"}</span>
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
          <span className={`font-extralight`}>{"16.49 GB"}</span>
        </section>

        {/* Free (in GB) */}
        <section
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <span>Free: </span>
          <span className={`font-extralight`}>{"12.25 GB"}</span>
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
          <ProgressBar percentage={57.4} />
        </section>
      </Card>
    </div>
  );
};

export default DiskInfo;
