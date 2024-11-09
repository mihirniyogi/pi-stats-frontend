import { FaMemory } from "react-icons/fa6";
import Card from "../Common/Card";
import ProgressBar from "../Common/ProgressBar";
import { MemInfoData } from "../../utils/ApiInterfaces";
import useFetch from "../../utils/useFetch";

const MemInfo = () => {
  const { data, loading } = useFetch<MemInfoData>("mem/", 10000);

  return (
    <div>
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

      {loading ? (
        // Loading
        <Card>
          <p className="font-serif text-white">Memory Loading...</p>
        </Card>
      ) : (
        // Actual
        <Card>
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
            <span className={`font-extralight`}>
              {data ? `${data.total.toFixed(2)} GB` : "-"}
            </span>
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
            <span className={`font-extralight`}>
              {data ? `${data.used.toFixed(2)} GB` : "-"}
            </span>
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
            <span className={`font-extralight`}>
              {" "}
              {data ? `${data.available.toFixed(2)} GB` : "-"}
            </span>
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
            <ProgressBar
              percentage={
                data
                  ? parseFloat(((data.used / data.total) * 100).toFixed(1))
                  : 0.0
              }
            />
          </section>
        </Card>
      )}
    </div>
  );
};

export default MemInfo;
