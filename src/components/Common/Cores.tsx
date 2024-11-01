import RingProgressBar from "./RingProgressBar";

const Cores = (props: { cores: number[] }) => {
  return (
    <div className={`mt-2 space-x-2 flex flex-row items-center`}>
      {props.cores.map((core, index) => (
        <RingProgressBar
          key={index}
          width={64}
          height={64}
          value={core}
          text={`${core}%`}
          pathStroke="#04A777"
          pathStrokeLinecap="butt"
          trailStroke="#CFCBCA"
          textFill="#04A777"
          fontSize="1.2rem"
        />
      ))}
    </div>
  );
};

export default Cores;
