import { FaBuffer } from "react-icons/fa6";
import Card from "./Common/Card";

type Service = {
  name: string;
  managedBy: string;
  port?: number;
  status: "online" | "offline";
  link?: string;
};

const SvcInfo = () => {
  const border = 0;

  const services: Service[] = [
    {
      name: "strapi",
      managedBy: "pm2",
      port: 1337,
      status: "offline",
      link: "https://strapi.mihirniyogi.com/admin",
    },
    {
      name: "cloudflared",
      managedBy: "docker",
      status: "online",
      link: "https://dash.cloudflare.com/",
    },
    {
      name: "sshd",
      managedBy: "systemd",
      port: 22,
      status: "online",
      link: "https://ssh.mihirniyogi.com/",
    },
    {
      name: "pi-stats-backend",
      managedBy: "pm2",
      port: 5000,
      status: "online",
    },
  ];

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
