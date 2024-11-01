import { ReactNode } from "react";

const Card = (props: { children?: ReactNode; flag?: string }) => {
  return (
    <div
      className={`relative flex flex-col bg-card p-4 rounded-lg overflow-hidden
      mt-2
      sm:mt-3 
      md:mt-4 
      lg:mt-5 
    `}
    >
      {props.flag && (
        <span className="absolute top-0 right-0 hidden px-2 py-1 text-sm font-medium sm:block text-background bg-flagyellow">
          {props.flag}
        </span>
      )}

      {props.children}
    </div>
  );
};

export default Card;
