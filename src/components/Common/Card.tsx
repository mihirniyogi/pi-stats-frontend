import { ReactNode } from "react";

const Card = (props: {
  children?: ReactNode;
  flag?: string;
  status?: "online" | "offline";
}) => {
  return (
    <div
      className={`relative flex flex-col bg-card p-4 rounded-lg overflow-hidden
      mt-2
      sm:mt-3 
      md:mt-4 
      lg:mt-5
      ${
        props.status
          ? props.status === "online"
            ? "border border-jadegreen"
            : "border border-red-500"
          : ""
      }
    `}
    >
      {props.flag && (
        <span
          className={`absolute top-0 right-0 px-2 py-1 font-medium text-background bg-flagyellow
          text-xs
          sm:text-sm
        `}
        >
          {props.flag}
        </span>
      )}

      {props.children}
    </div>
  );
};

export default Card;
