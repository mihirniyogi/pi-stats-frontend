import { SysInfoData } from "../utils/ApiInterfaces";
import Card from "./Common/Card";
import { FaGear } from "react-icons/fa6";
import useFetch from "../utils/useFetch";

const SysInfo = () => {
  const { data, loading, error } = useFetch<SysInfoData>("gen/", 10000);

  if (loading) {
    return <p className="text-white">Sys Loading...</p>;
  }
  if (error) {
    return <p className="text-white">{error}</p>;
  }

  const serverOnline = data !== null ? 1 : 0;

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
        <FaGear className={`text-jadegreen mr-2`} />
        <span>System</span>
      </h2>

      <Card>
        {/* Status */}
        <section
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <span>Status: </span>
          <span
            className={`inline-block w-[0.8em] h-[0.8em]  
                rounded-full 
                ${serverOnline ? "bg-jadegreen" : "bg-red-500"}`}
          ></span>
          <span className={`font-extralight`}>
            {serverOnline ? " Online" : " Offline"}
          </span>
        </section>

        {/* Last Boot */}
        <section
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <span>Last Boot: </span>
          <span className={`font-extralight`}>
            {data ? data.last_boot : "-"}
          </span>
        </section>

        {/* Uptime */}
        <section
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          <span>Uptime: </span>
          <span className={`font-extralight`}>
            {data
              ? `${Math.round(data.uptime.days)}D, 
                  ${Math.round(data.uptime.hours)}H, 
                  ${Math.round(data.uptime.minutes)}M, 
                  ${Math.round(data.uptime.seconds)}S`
              : "-"}{" "}
          </span>
        </section>

        {/* Static Info */}
        <section
          className={`mt-4 text-white font-serif font-medium
              text-xs
              sm:text-sm
              `}
        >
          <span className={`flex flex-row flex-wrap font-extralight italic`}>
            {data
              ? `${data.arch} • ${data.hostname} • ${data.os_type} • ${data.os_name} • ${data.os_version}`
              : "unable to fetch system info"}
          </span>
        </section>
      </Card>
    </div>
  );
};

export default SysInfo;
