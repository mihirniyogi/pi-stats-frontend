import Card from "./Common/Card";
import Cores from "./Common/Cores";
import ProgressBar from "./Common/ProgressBar";

const CpuInfo = () => {
  const border = 0;

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
        CPU
      </h2>

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
          <span className={`font-extralight`}>{"46.5°C"}</span>
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
          <span className={`font-extralight`}>{`${"0.6"} / 1.8 GHz`}</span>
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
          <ProgressBar percentage={10} />
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
          <Cores cores={[10, 20, 30, 40]} />
        </section>
      </Card>
    </div>
  );
};

export default CpuInfo;
