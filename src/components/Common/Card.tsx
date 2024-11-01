import { ReactNode } from "react";

const Card = (props: { children?: ReactNode }) => {
  return (
    <div
      className={`flex flex-col bg-card p-4 rounded-lg
      mt-2
      sm:mt-3 
      md:mt-4 
      lg:mt-5 
    `}
    >
      {props.children}
    </div>
  );
};

export default Card;
