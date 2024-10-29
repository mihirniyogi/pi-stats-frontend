import Card from "./Card";

const SystemInfo = () => {
  const border = 0;
  const serverOnline = 1;

  return (
    <div
      className={`
          mt-4
          sm:mt-5
          md:mt-6
          lg:mt-7
          ${border ? "border border-orange-400" : ""}
          `}
    >
      <h2
        className={`text-white font-sans font-bold
            text-md
            sm:text-lg
            md:text-xl
            lg:text-2xl
            `}
      >
        System
      </h2>

      <Card>
        <p
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          Status:{" "}
          <span
            className={`inline-block w-[0.8em] h-[0.8em]  
                rounded-full 
                ${serverOnline ? "bg-green-500" : "bg-red-500"}`}
          ></span>
          <span className={`font-extralight`}>
            {serverOnline ? " Online" : " Offline"}
          </span>
        </p>

        <p
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          Last Boot:{" "}
          <span className={`font-extralight`}>
            {"26 October 2024 21:30:54"}
          </span>
        </p>
        <p
          className={`text-white font-serif font-medium
              text-sm
              sm:text-md
              md:text-lg
              lg:text-xl
              `}
        >
          Uptime:{" "}
          <span className={`font-extralight`}>{"2D, 13H, 30M, 56S"}</span>
        </p>
      </Card>
    </div>
  );
};

export default SystemInfo;
