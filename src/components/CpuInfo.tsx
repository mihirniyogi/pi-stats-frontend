import useFetch from "../utils/useFetch";
import { CpuInfoData } from "../utils/ApiInterfaces";
import Card from "./Common/Card";
import Cores from "./Common/Cores";
import ProgressBar from "./Common/ProgressBar";
import { FaMicrochip } from "react-icons/fa6";

const CpuInfo = () => {
  const { data, loading } = useFetch<CpuInfoData>("cpu/", 10000);

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
        <FaMicrochip className={`text-jadegreen mr-2`} />
        <span>CPU</span>
      </h2>

      {loading && (
        <Card>
          <p className="font-serif text-white">CPU Loading...</p>
        </Card>
      )}

      <Card>
        {/* Temperature */}
        <section
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <span>Temperature: </span>
          <span className={`font-extralight`}>
            {data ? `${data.cpu_temp.toFixed(2)}°C` : "-"}
          </span>
        </section>

        {/* Frequency */}
        <section
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <span>Frequency: </span>
          <span className={`font-extralight`}>
            {data ? `${(data.cpu_freq / 1000).toFixed(1)} / 1.8 GHz` : "-"}
          </span>
        </section>

        {/* Load */}
        <section
          className={`flex flex-row items-center
            text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <span className={`mr-2`}>Load: </span>
          <ProgressBar percentage={data ? data.cpu_usage : 0.0} />
        </section>

        {/* 4 Cores Load */}
        <section
          className={`flex flex-col text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <span>Cores: </span>
          <Cores
            cores={data ? Object.values(data.cpu_usage_per_core) : [0, 0, 0, 0]}
          />
        </section>
      </Card>
    </div>
  );
};

export default CpuInfo;
