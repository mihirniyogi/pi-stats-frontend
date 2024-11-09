import { FaBuffer } from "react-icons/fa6";
import Card from "./Common/Card";
import { SvcInfoData } from "../utils/ApiInterfaces";
import useFetch from "../utils/useFetch";

type Service = {
  name: string;
  managedBy: string;
  port?: number;
  status: "online" | "offline";
  link?: string;
};

const SvcInfo = () => {
  const { data, loading, error } = useFetch<SvcInfoData>("svc/", 10000);

  if (loading) {
    return <p className="text-white">Services Loading...</p>;
  }
  if (error) {
    return <p className="text-white">{error}</p>;
  }

  const services: Service[] = data
    ? Object.entries(data).map(([name, info]) => ({
        name: name,
        managedBy: info.process,
        port: info.port ? info.port : undefined,
        status: info.status === true ? "online" : "offline",
        link: info.link ? info.link : undefined,
      }))
    : [];

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
        <FaBuffer className={`text-jadegreen mr-2`} />
        <span>Services</span>
      </h2>

      <div className={`grid grid-cols-1 gap-x-4 sm:grid-cols-2 font-serif`}>
        {services.map((service: Service, index: number) => (
          <Card key={index} status={service.status}>
            <h3
              className={`flex flex-row space-x-2 text-white
                text-sm
                sm:text-md
                md:text-lg
                lg:text-xl`}
            >
              <span>{service.name}</span>
              <span className={`italic text-gray-400`}>
                {service.port ? `:${service.port}` : ""}
              </span>
            </h3>
            <span
              className={`
                text-xs
                sm:text-sm
                md:text-md
                lg:text-lg
              italic text-gray-400`}
            >
              {`managed by ${service.managedBy}`}
            </span>
            <span
              className={`
                text-xs
                sm:text-sm
                md:text-md
                lg:text-lg
              italic underline underline-offset-2 text-gray-400`}
            >
              <a
                className="hidden sm:block"
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {service.link ? "link" : ""}
              </a>
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SvcInfo;
